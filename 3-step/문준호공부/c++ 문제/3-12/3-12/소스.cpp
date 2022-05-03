#include <iostream>
#include "헤더.h"
using namespace std;

Ram::Ram() {

}
char Ram::read(int address) {
	return mem[address];
}
void Ram::write(int address, char value) {
	mem[address] = value;
}
Ram::~Ram() {
	cout << "메모리 제거됨";
}