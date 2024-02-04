public abstract class Animal {
    String name;
    boolean pet;

    Animal() {}

    Animal(String name) {
        this(name,false);
    }

    Animal(String name, boolean pet) {
        this.name = name;
        this.pet = pet;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public abstract int sleep();
}
