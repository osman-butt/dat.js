public class Student extends Person {
    private int schoolYear;

    public Student(String firstName, String lastName){
        super(firstName,lastName);
    }

    public Student(int schoolYear, String firstName, String lastName){
        this(firstName, lastName);
        this.schoolYear = schoolYear;
    }
    
    public Student(int schoolYear, String firstName, String middleName, String lastName) {
        super(firstName,middleName,lastName);
        this.schoolYear = schoolYear;
    }

    public Student(String firstName, String middleName, String lastName) {
        this(0,firstName,middleName,lastName);
    }

    public Student(int schoolYear, String fullName) {
        this(fullName);
        this.schoolYear = schoolYear;
    }

    public Student(String fullName) {
        setFullName(fullName);
    }

    public Student(Student student) {
        this(student.getSchoolYear(),student.getFirstName(),student.getMiddleName(),student.getLastName());
    }

    public Student(){}

    public void setSchoolYear(int schoolYear) {
        this.schoolYear = schoolYear;
    }

    public int getSchoolYear() {
        return schoolYear;
    }
}

