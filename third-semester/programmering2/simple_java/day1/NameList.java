public class NameList {
    public static void main(String[] args) {
        String[] nameList = {"Harry","Ron","Hermione","Neville","Draco"};
        for (String name : nameList) {
            System.out.println(name);
        }
        for (int i = 0; i < nameList.length; i++) {
            System.out.println(nameList[i]);
        }
        int counter = 0;
        while(counter<nameList.length) {
            System.out.println(nameList[counter]);
            counter++;
        }
    }
}
