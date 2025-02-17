#include <stdio.h>
#include <stdlib.h>
#include <unistd.h>
#include <sys/types.h>
#include <sys/wait.h>

int main() {
    printf("Parent Process\tProcess ID: %d, Parent Process ID: %d\n", getpid(), getppid());

    pid_t pid_c = fork();
    if (pid_c == 0) {
        // Child C
        printf("Child C\t\tProcess ID: %d, Parent Process ID: %d\n", getpid(), getppid());
        exit(0);
    } else {
        wait(NULL); // Parent waits for Child C to finish
    }

    pid_t pid_b = fork();
    if (pid_b == 0) {
        // Child B
        printf("Child B\t\tProcess ID: %d, Parent Process ID: %d\n", getpid(), getppid());
        exit(0);
    } else {
        wait(NULL); // Parent waits for Child B to finish
    }

    pid_t pid_a = fork();
    if (pid_a == 0) {
        // Child A
        printf("Child A\t\tProcess ID: %d, Parent Process ID: %d\n", getpid(), getppid());

        // Child D (grandchild of the original parent)
        pid_t pid_d = fork();
        if (pid_d == 0) {
            printf(" Child D\tProcess ID: %d, Parent Process ID: %d\n", getpid(), getppid());
            execlp("ps", "ps", "-a", NULL); // Run `ps -a` in Child D
            exit(1);
        } else {
            wait(NULL); // Child A waits for Child D to finish
        }

        // Child E (another grandchild of the original parent)
        pid_t pid_e = fork();
        if (pid_e == 0) {
            printf(" Child E\tProcess ID: %d, Parent Process ID: %d\n", getpid(), getppid());
            execlp("ls", "ls", "-l", NULL); // Run `ls -l` in Child E
            exit(1);
        } else {
            wait(NULL); // Child A waits for Child E to finish
        }

        exit(0);
    } else {
        wait(NULL); // Parent waits for Child A to finish
    }

    return 0;
}
