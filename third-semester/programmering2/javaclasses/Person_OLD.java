public class Person_OLD {
	private String firstName;
	private String lastName;
	private String middleName;
	private int age;

	public Person_OLD(String firstName,String lastName) {
		this.firstName = firstName;
		this.lastName = lastName;
	}

	public Person_OLD(String fullName) {
		setFullName(fullName);
	}

	public Person_OLD(String firstName, String middleName,String lastName) {
		this.firstName = firstName;
		this.middleName = middleName;
		this.lastName = lastName;
	}

	public Person_OLD(String firstName, int age) {
		this.firstName = firstName;
		this.age = age;
	}

	public Person_OLD(String firstName, String middleName, String lastName, int age) {
		this.firstName = firstName;
		this.middleName = middleName;
		this.lastName = lastName;
		this.age = age;
	}

	public Person_OLD(Person_OLD person) {
		this.firstName = person.getFirstName();
		this.middleName = person.getMiddleName();
		this.lastName = person.getLastName();
		this.age = person.getAge();
	}

	public String toString() {
		if(hasMiddleName()) {
			return firstName + " " + middleName + " " + lastName + ", age: " + age;
		} else {
			return firstName + " " + lastName + ", age: " + age;
		}
	}

	public void makeHarry() {
		firstName = "Harry";
		lastName = "Potter";
		age = 13;
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
		return age;
	}

	public void setAge(int age) {
		this.age = age;
	}

	public String getFullName() {
		return firstName + " " + middleName + " " + lastName;
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
		return middleName == null;
	}
}
