public class StringsExcercise {
    public static void main(String[] args) {
        StringsExcercise app = new StringsExcercise();
        String[] nameParts = app.getNameParts("Harry Potter");
        System.out.println("Fornavn: "+nameParts[1]);
        System.out.println("Mellemnavn: "+nameParts[2]);
        System.out.println("Fornavn: "+nameParts[0]);
        String fullName = app.getFullName("Potter","Harry",null);
        System.out.println("Navn: "+ fullName);
        String fullNameOverloaded = app.getFullName("Potter","Harry");
        System.out.println("Navn: "+ fullNameOverloaded);
        String[] twoNames = {"Potter","Harry"};
        String fullNameOverloaded2 = app.getFullName(twoNames);
        System.out.println("Navn: "+ fullNameOverloaded2);
    }

    public String[] getNameParts(String fullName) {
        String firstName = fullName.substring(0,fullName.indexOf(" "));
        String lastName = fullName.substring(1+fullName.lastIndexOf(" "));
        String middleName;
        if(fullName.indexOf(" ") == fullName.lastIndexOf(" ")) {
            middleName = null;
        } else {
            middleName = fullName.substring(1+fullName.indexOf(" "),fullName.lastIndexOf(" "));
        }
        String[] nameParts = {lastName,firstName,middleName};
        return nameParts;
    }

    public String getFullName(String lastName, String firstName, String middleName) {
        if(middleName==null) {
            return firstName+" "+lastName;
        } else {
            return firstName + " " + middleName + " " + lastName;
        }
    }

    public String getFullName(String lastName,String firstName) {
        return firstName + " " + lastName; 
    }

    public String getFullName(String[] nameParts) {
        if (nameParts.length>2) {
            if(nameParts[2]==null) {
                return nameParts[1]+" "+nameParts[0];
            } else {
                return nameParts[1] + " " + nameParts[2] + " " + nameParts[0];
            }
        } else {
            return nameParts[1]+" "+nameParts[0];
        }
    }
}
