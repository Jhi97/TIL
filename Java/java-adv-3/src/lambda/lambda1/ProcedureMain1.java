package lambda.lambda1;

import lambda.Procedure;

public class ProcedureMain1
{
    static void main() {
        Procedure procedure = new Procedure() {
            @Override
            public void run() {
                System.out.println("hello! lambda");
            }
        };

        procedure.run();
    }
}
