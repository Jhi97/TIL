package lambda.lambda1;

import lambda.Procedure;

public class ProcedureMain2
{
    static void main() {
        Procedure procedure = ()-> {
                System.out.println("hello! lambda");
        };

        procedure.run();
    }
}
