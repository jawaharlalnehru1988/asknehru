import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ToolbarComponent } from './toolbar/toolbar.component';

@Component({
    selector: 'app-root',
    standalone:true,
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss'],
    imports: [ToolbarComponent, RouterOutlet]
})
export class AppComponent {
  title = 'asknehru';

  code = `
import java.util.Scanner;

public class AddTwoNumbers {
    public static void main(String[] args) {
        // Create a Scanner object to take input from the user
        Scanner scanner = new Scanner(System.in);

        // Prompt user for the first number
        System.out.print("Enter the first number: ");
        int num1 = scanner.nextInt();

        // Prompt user for the second number
        System.out.print("Enter the second number: ");
        int num2 = scanner.nextInt();

        // Calculate the sum
        int sum = num1 + num2;

        // Output the result
        System.out.println("The sum of " + num1 + " and " + num2 + " is: " + sum);
        
        // Close the scanner
        scanner.close();
    }
}

`

}
