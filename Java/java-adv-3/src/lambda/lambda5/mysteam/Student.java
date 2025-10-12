package lambda.lambda5.mysteam;

public class Student {

    private String name;
    private Integer Score;

    public Student(String name, Integer score) {
        this.name = name;
        Score = score;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public Integer getScore() {
        return Score;
    }

    public void setScore(Integer score) {
        Score = score;
    }
}
