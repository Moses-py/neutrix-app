#include "main.h"

char *my_getline(void) {
    static char buffer[1024];
    static int position = 0, char_length = 0;
    char *read_line = NULL;
    int i = 0, character;

    while (true) {
        if (position >= char_length) {
            char_length = read(STDIN_FILENO, buffer, 1024);
            if (char_length <= 0) break;
            position = 0;
        }
        c = buffer[position++];
        if (character == '\n' || character == EOF) break;
        if (i == 0) read_line = malloc(1);
        else read_line = realloc(read_line, i + 1);
        read_line[i++] = character;
    }
    if (i == 0 && char_length <= 0) return NULL;
    if (i > 0) {
        read_line = realloc(read_line, i + 1);
        read_line[i] = '\0';
    }
    return read_line;
}
c