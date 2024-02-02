public class Calculate {
    public static void main(String[] args) {
        int a = 25;
        int b = 3;

        int result = a*b;

        System.out.println("Resultatet af " + a + " * " + b + " er: " + result);
        // System.out.println(STR."Resultatet af \{a} * \{b} er: \{result}");
        System.out.printf("Resultatet af %d * %d er: %d",a,b,result);
    }
}
