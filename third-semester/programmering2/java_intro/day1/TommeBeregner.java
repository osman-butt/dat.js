import java.util.Locale;
import java.util.Scanner;

public class TommeBeregner {
    public static void main(String[] args) {

        final double INCH_TO_CM = 2.54;

        // Locale.setDefault(Locale.ENGLISH) // Sets program locale to english
        
        Scanner scanner = new Scanner(System.in).useLocale(Locale.US);
        System.out.print("Indtast en længde i tommer: ");
        double inch = scanner.nextDouble();
        double cm = inch*INCH_TO_CM;

        System.out.println(inch + " tommer svarer til " + cm + " centimeter");
        scanner.close();
    }
}
