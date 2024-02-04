public class Cat extends Animal {
    Cat() {
        super(null, true);
    }

    Cat(String name) {
        super(name,true);
    }

    public int sleep() {
        return 1;
    }
}
