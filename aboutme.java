public class AboutMe {
    private String name;
    private String username;
    private String discord;
    private String gender;

    public AboutMe() {
        this.name = "Hemang";
        this.username = "Zemerik";
        this.discord = ".zemerik";
        this.gender = "Male";
    }

    public String[] whoAmI() {
        return new String[]{"cricket enthusiast", "coder/programmer/developer", "high school student"};
    }

    public String[] whatIDo() {
        return new String[]{"Web/App Development", "Customized Bots", "Games"};
    }

    public String[] languages() {
        return new String[]{"JavaScript", "HTML", "Python", "Java", "Scratch"};
    }

    public String[] tech() {
        return new String[]{"Node.js", "npm", "discord.js", "discord.py"};
    }

    public String[] hobbies() {
        return new String[]{"chess", "maths", "swimming", "cricket"};
    }

    public String[] interestingFacts() {
        return new String[]{"self-taught", "young"};
    }

    public static void main(String[] args) {
        AboutMe me = new AboutMe();
        System.out.println("Name: " + me.name);
        System.out.println("Username: " + me.username);
        System.out.println("Discord: " + me.discord);
        System.out.println("Gender: " + me.gender);

        System.out.println("Who Am I:");
        for (String role : me.whoAmI()) {
            System.out.println("- " + role);
        }

        System.out.println("What I Do:");
        for (String activity : me.whatIDo()) {
            System.out.println("- " + activity);
        }

        System.out.println("Languages:");
        for (String language : me.languages()) {
            System.out.println("- " + language);
        }

        System.out.println("Tech Stack:");
        for (String tech : me.tech()) {
            System.out.println("- " + tech);
        }

        System.out.println("Hobbies:");
        for (String hobby : me.hobbies()) {
            System.out.println("- " + hobby);
        }

        System.out.println("Interesting Facts:");
        for (String fact : me.interestingFacts()) {
            System.out.println("- " + fact);
        }
    }
}
