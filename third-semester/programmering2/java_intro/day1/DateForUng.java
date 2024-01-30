import java.util.Scanner;

public class DateForUng {

    int myAge;
    int dateAge;
    public static void main(String[] args) {
        DateForUng app = new DateForUng();
        app.start();
    }

    public void start() {
        System.out.println("Indtast venligst din dates alder:");
        this.writeWelcome();
        this.setMyAge();
        this.setDateAge();
        if (this.isDateYounger()) {
            System.out.println("Din date er yngre end dig.");
        } else {
            System.out.println("Din date er ikke yngre end dig.");
        }

        if (this.isDateOldEnough()) {
            System.out.println("Din date er gammel nok til at du kan date hende/ham.");
        } else {
            System.out.println("Din date er desværre ikke gammel nok til at du kan date hende/ham.");
        }
    }

    public void writeWelcome() {
        System.out.println("Hej, velkommen til 'Er din date for ung?'-beregneren. ");
    }

    public void setMyAge() {
        Scanner scanner = new Scanner(System.in);
        System.out.println("Indtast venligst din alder:");
        this.myAge = scanner.nextInt();
    }

    public void setDateAge() {
        Scanner scanner = new Scanner(System.in);
        System.out.println("Indtast venligst din dates alder:");
        this.dateAge = scanner.nextInt();
    }

    public boolean isDateYounger() {
        return this.myAge > this.dateAge;
    }


    public int getMinAge() {
        return this.myAge/2+7;
    }

    public boolean isDateOldEnough() {
        return this.dateAge>=this.getMinAge();
    }
}


//// Methods
// Start <- program logic
// getMinAge
// isGoodToDate
// isDateYounger
// setPartnerAge
// setYourAge

// isDateOldEnough
// writeWelcome()
// int getMinimumAge(myAge);
// boolean isDateOlder(myAge, dateAge)
// boolean isDateOldEnough(dateAge, minimumAge)
// getInput