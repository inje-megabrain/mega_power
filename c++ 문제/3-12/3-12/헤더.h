#pragma once
class Ram {
private:
	char mem[200];
	int size;
public:
	Ram();
	~Ram();
	char read(int address);
	void write(int address, char value);
};