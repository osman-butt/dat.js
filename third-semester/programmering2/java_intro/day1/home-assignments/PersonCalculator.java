import java.util.Scanner;
import java.util.Locale;

public class PersonCalculator {

    private String[] names;
    private int[] ages;
    private int total = 0;
    private double average = 0;
    public static void main(String[] args) {
        PersonCalculator calculator = new PersonCalculator();
        calculator.start();
    }

    public void start() {
        welcome();
        setArrayLength();
        inputValues();
        System.out.println("Total age: " + getTotal());
        System.out.println("Average age: " + getAverage());
    }

    public void welcome() {
        System.out.println("Welcome to the age average calculator.");
    }

    public void setArrayLength() {
        Scanner scanner = new Scanner(System.in);
        System.out.println("Enter the number of persons you want to take the average over?");
        int arrayLength = scanner.nextInt();
        names = new String[arrayLength];
        ages = new int[arrayLength];
    }
    public void inputValues() {
        Scanner inputName = new Scanner(System.in).useLocale(Locale.ENGLISH);
        Scanner inputAge = new Scanner(System.in).useLocale(Locale.ENGLISH);
        for (int index = 0; index < ages.length; index++) {
            System.out.println("Enter the persons name:");
            names[index] = inputName.nextLine();
            System.out.println("Enter "+names[index] +"'s age:");
            ages[index] = inputAge.nextInt();
        }
        calculateTotal();
        calculateAverage();
    }

    public void calculateTotal() {
        for (int age: ages) {
            total += age;
        }
    }

    public void calculateAverage() {
        average = (double) total / (double) ages.length;
        average = roundToDecimals(average, 2);
    }

    public int getTotal() {
        return total;
    }

    public double getAverage() {
        return average;
    }

    public static double roundToDecimals(double number, int numberOfDecimals) {
        double scale = Math.pow(10, numberOfDecimals);
        return Math.round(number * scale) / scale;
    }
}
