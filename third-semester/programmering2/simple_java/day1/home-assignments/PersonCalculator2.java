import java.util.Locale;
import java.util.Scanner;

public class PersonCalculator2 {
    public static void main(String[] args) {
        PersonCalculator2 calculator = new PersonCalculator2();
        calculator.start();
    }

    public void start() {
        welcome();
        Scanner input = new Scanner(System.in).useLocale(Locale.ENGLISH);

        int numberOfPersons = getNumberOfPersons(input);
        String[] names = new String[numberOfPersons];
        int[] ages = new int[numberOfPersons];

        for (int i = 0; i< numberOfPersons;i++) {
            names[i] = getInputName(input);
            ages[i] = getInputAge(input);
        }

        int total = getTotal(ages);
        double average = getAverage(total, numberOfPersons);

        System.out.println("Total age: " + total);
        System.out.println("Average age: " + average);
    }

    public void welcome() {
        System.out.println("Welcome to the average calculator.");
    }

    // prompt user
    public int getNumberOfPersons(Scanner input) {
        System.out.println("How many values do you want to take the average over?");
        return Integer.parseInt(input.nextLine());
    }

    public String getInputName(Scanner input) {
        System.out.println("Enter the persons name:");
        return input.next();
    }

    public int getInputAge(Scanner input) {
        System.out.println("Enter the persons age:");
        return input.nextInt();
    }

    public int getTotal(int[] personAges) {
        int total = 0;
        for (int age : personAges) {
            total += age;
        }
        return total;
    }

    public double getAverage(int total, int numberOfValues) {
        double average = (double) total / numberOfValues;
        return roundToDecimals(average,2);
    }

    public static double roundToDecimals(double number, int numberOfDecimals) {
        double scale = Math.pow(10, numberOfDecimals);
        return Math.round(number * scale) / scale;
    }
}
