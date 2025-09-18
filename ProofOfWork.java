import java.util.Arrays;
import java.security.MessageDigest;
import java.security.NoSuchAlgorithmException;

public class ProofOfWork {
    private static final int DIFFICULTY = 2;
    private static final String TARGET_PREFIX = new String(new char[DIFFICULTY]).replace('\0', '0');

    public static void main(String[] args) {
        String data = "Ishita";
        System.out.println("Target prefix" + TARGET_PREFIX);
        long nonce = mine(data);
        System.out.println("Found nonce: " + nonce);
        System.out.println("Hash: " + generateHash(data + nonce));
    }

    public static long mine(String data) {
        long nonce = 0;
        while (true) {
            String hash = generateHash(data + nonce);
            if (hash.startsWith(TARGET_PREFIX)) {
                return nonce;
            }
            nonce++;
        }
    }

    public static String generateHash(String input) {
        try {
            MessageDigest digest = MessageDigest.getInstance("SHA-256");
            byte[] hashBytes = digest.digest(input.getBytes());
            System.out.println("Hash bytes" + Arrays.toString(hashBytes));
            StringBuilder sb = new StringBuilder();
            for (byte b : hashBytes) {
                sb.append(String.format("%02x", b));
            }
            return sb.toString();
        } catch (NoSuchAlgorithmException e) {
            throw new RuntimeException(e);
        }
    }
}