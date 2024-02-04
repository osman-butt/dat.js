import java.time.LocalDate;
import java.time.Period;

public class Person {
	private String firstName;
	private String lastName;
	private String middleName;
	private LocalDate birthDay;


	public Person() {}

	public Person(String fullName) {
		setFullName(fullName);
	}

	public Person(String firstName,String lastName) {
		this(firstName, null, lastName);
	}

	public Person(String firstName, String middleName,String lastName) {
		this.firstName = firstName;
		this.middleName = middleName;
		this.lastName = lastName;
	}

	public Person(String firstName, LocalDate birthDay) {
		this.firstName = firstName;
		this.birthDay = birthDay;
	}

	public Person(String firstName, String middleName, String lastName, LocalDate birthDay) {
		this.firstName = firstName;
		this.middleName = middleName;
		this.lastName = lastName;
		this.birthDay = birthDay;
	}

	public Person(Person person) {
		this.firstName = person.getFirstName();
		this.middleName = person.getMiddleName();
		this.lastName = person.getLastName();
		this.birthDay = person.getBirthDay();
	}

	public void makeHarry() {
		firstName = "Harry";
		lastName = "Potter";
		birthDay = LocalDate.parse("2006-02-01");
	}

	public void makeRon() {
		firstName = "Ron";
		lastName = "Weasley";
		birthDay = LocalDate.parse("2006-02-02");
	}

	public void makeHermione() {
		firstName = "Hermione";
		lastName = "Granger";
		birthDay = LocalDate.parse("2006-02-03");
	}

	public String toString() {
		if(hasMiddleName()) {
			return firstName + " " + middleName + " " + lastName + ", age: " + getAge();
		} else {
			return firstName + " " + lastName + ", age: " + getAge();
		}
	}

	public String getFirstName() {
		return firstName;
	}

	public void setFirstName(String firstName) {
		this.firstName = firstName;
	}

	public String getLastName() {
		return lastName;
	}

	public void setLastName(String lastName) {
		this.lastName = lastName;
	}

	public String getMiddleName() {
		return middleName;
	}

	public void setMiddleName(String middleName) {
		this.middleName = middleName;
	}

	public int getAge() {
		LocalDate today = LocalDate.now();
		return birthDay.until(today).getYears();
	}

	public LocalDate getBirthDay() {
		return birthDay;
	}

	public void setBirthDay(LocalDate birthDay) {
		this.birthDay = birthDay;
	}

	public void setBirthDay(String birthDay) {
		// Check if string is valid date else throw new DateTimeParseException(...)
		this.birthDay = LocalDate.parse(birthDay);
	}

	public boolean hasBirthDay() {
		LocalDate today = LocalDate.now();
		return Period.between(birthDay, today).withYears(0).isZero();
	}

	public String getFullName() {
		if(hasMiddleName()) {
			return firstName + " " + middleName + " " + lastName;
		} else {
			return firstName + " " + lastName;
		}
		
	}

	public void setFullName(String fullName) {
		firstName = fullName.substring(0,fullName.indexOf(" "));
		lastName = fullName.substring(1+fullName.lastIndexOf(" "));
        if(fullName.indexOf(" ") == fullName.lastIndexOf(" ")) {
            middleName = null;
        } else {
            middleName = fullName.substring(1+fullName.indexOf(" "),fullName.lastIndexOf(" "));
        }
	}

	public boolean hasMiddleName() {
		return middleName != null;
	}
}
