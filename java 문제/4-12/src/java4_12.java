import java.util.Scanner;

 class seat{
	String[] name= {"---","---","---","---","---","---","---","---","---","---"};
	void show(int line) {
		if(line==1) System.out.print("S>> ");
		else if(line==2) System.out.print("A>> ");
		else if(line==3) System.out.print("B>> ");
		for(int i=0;i<10;i++) {
			System.out.print(name[i] + " ");
		}
		System.out.println("");
	}
	void set_num(String name,int num) {
		if(num<11&&num>0) {
			this.name[num-1] = name;
		}
		else System.out.println("없는 좌석입니다.");
	}
	boolean cancle(String name) {
		for(int i=0;i<10;i++) {
			if(this.name[i].equals(name)) {
				this.name[i] = " --- ";
				System.out.println("취소가 완료되엇습니다.");
				return false;
			}
		}
		return true;
	}
}
public class java4_12 {
	
	public static void main(String args[]) {
		seat [] s=new seat[3];
		String name;
		int seat_num;
		Scanner scan=new Scanner(System.in);
		for(int i=0;i<3;i++) {
			s[i] = new seat();
		}
		int func,num;
		while(true) {
			System.out.print("예약:1, 조회:2, 취소:3, 끝내기:4>> ");
			func = scan.nextInt();
			if(func == 1) {
				System.out.print("좌석 구분 S(1), A(2), B(3)>> ");
				num = scan.nextInt();
				if(num>0&&num<4) {
					s[num-1].show(num);
					System.out.print("이름>>> ");
					name = scan.next();
					System.out.print("번호>>> ");
					seat_num = scan.nextInt();
					s[num-1].set_num(name, seat_num);
				}
				else System.out.println("없는 좌석입니다.");
			}
			else if(func == 2) {
				for(int i=0;i<3;i++) s[i].show(i+1);
				System.out.println("<<<조회를 완료했습니다.>>>");
			}

			else if (func == 3) {	
				System.out.print("좌석 S(1), A(2), B(3)>> ");
				num = scan.nextInt();
				s[num-1].show(num);
				System.out.print("이름>>> ");
				name = scan.next();
				if(s[num-1].cancle(name)) System.out.println("취소할 이름이 없습니다.");
			}

			else if(func == 4) {
				break;
			}
			else{
				System.out.println("없는 메뉴입니다 다시 선택해 주세요.");
			}
		}
	}
}