import java.util.Scanner;

public class HvadHedderDu {
    public static void main(String[] args) {
        final int CURRENT_YEAR = 2024;
        Scanner input = new Scanner(System.in);
        System.out.println("Hej, hvad hedder du?");
        String name = input.nextLine();
        System.out.println("Hej "+name+", hvor gammel er du?");
        int age = input.nextInt();
        int dob = CURRENT_YEAR-age-1;
        System.out.println("Okay, så må du være født i "+ dob + ", medmindre du allerede har haft fødselsdag i år.");
        input.close();
    }
}
