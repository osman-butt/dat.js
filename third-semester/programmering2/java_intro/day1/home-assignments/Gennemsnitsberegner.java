import java.util.Locale;
import java.util.Scanner;

public class Gennemsnitsberegner {
    private double[] values;
    private double total = 0;
    private double average = 0;
    
    public static void main(String[] args) {
        Gennemsnitsberegner calculator = new Gennemsnitsberegner();
        calculator.start();
    }    

    public void start() {
        welcome();
        setArrayLength();
        inputValues();
        System.out.println("Total: " + getTotal());
        System.out.println("Average: " + getAverage());
    }

    public void welcome() {
        System.out.println("Welcome to the average calculator.");
    }

    public void setArrayLength() {
        Scanner scanner = new Scanner(System.in);
        System.out.println("How many values do you want to take the average over?");
        int arrayLength = scanner.nextInt();
        values = new double[arrayLength];
    }

    public void inputValues() {
        Scanner scanner = new Scanner(System.in).useLocale(Locale.ENGLISH);
        for (int index = 0; index < values.length; index++) {
            System.out.println("Enter value number " + (index + 1) + ":");
            values[index] = scanner.nextDouble();
        }
        calculateTotal();
        calculateAverage();
    }

    public void calculateAverage() {
        average = total / values.length;
    }

    public void calculateTotal() {
         for (double value : values) {
            total += value;
        }
    }

    public double getTotal() {
        return total;
    }

    public double getAverage() {
        return average;
    }
}
