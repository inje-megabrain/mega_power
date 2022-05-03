#pragma once
class Box {
private:
	int width, height;
	char fill;
public:
	Box(int w, int h) { setSize(w, h); fill = '*'; }
	void setFill(char f) { fill = f; }
	void setSize(int w, int h) { width = w; height = h; }
	void draw();
};