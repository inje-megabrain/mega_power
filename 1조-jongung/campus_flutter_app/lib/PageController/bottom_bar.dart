import 'package:campus_flutter_app/UserPages/Page3/page.dart';
import 'package:campus_flutter_app/UserPages/Page4/page.dart';
import 'package:campus_flutter_app/UserPages/Page5/page.dart';
import 'package:campus_flutter_app/UserPages/Page1/page.dart';
import 'package:campus_flutter_app/UserPages/Page2/page.dart';

import '../UserPages/Page1/Calendar/calendar_ui.dart';

import 'package:flutter/material.dart';
import 'package:get/get.dart';
import './page_controller.dart';

class PagesControllerWidget extends StatelessWidget {
  PagesControllerWidget({Key? key}) : super(key: key);
  buildBottomNavigationMenu(context, landingPageController) {
    return Obx(() => MediaQuery(
        data: MediaQuery.of(context).copyWith(textScaleFactor: 10),
        child: SizedBox(
          child: BottomNavigationBar(
            type: BottomNavigationBarType.fixed,
            showUnselectedLabels: true,
            showSelectedLabels: true,
            onTap: landingPageController.changeTabIndex,
            currentIndex: landingPageController.tabIndex.value,
            unselectedItemColor: Colors.grey,
            selectedItemColor: Color.fromARGB(255, 195, 106, 106),
            items: [
              BottomNavigationBarItem(
                icon: Container(
                  margin: EdgeInsets.only(bottom: 7),
                  child: Icon(
                    Icons.calendar_month,
                    size: 20.0,
                  ),
                ),
                label: '일정',
              ),
              BottomNavigationBarItem(
                icon: Container(
                  margin: EdgeInsets.only(bottom: 7),
                  child: Icon(
                    Icons.edit_calendar,
                    size: 20.0,
                  ),
                ),
                label: '근무',
              ),
              BottomNavigationBarItem(
                icon: Container(
                  margin: EdgeInsets.only(bottom: 7),
                  child: Icon(
                    Icons.account_balance_wallet_outlined,
                    size: 20.0,
                  ),
                ),
                label: '급여',
              ),
              BottomNavigationBarItem(
                icon: Container(
                  margin: EdgeInsets.only(bottom: 7),
                  child: Icon(
                    Icons.notifications,
                    size: 20.0,
                  ),
                ),
                label: '알림',
              ),
              BottomNavigationBarItem(
                icon: Container(
                  margin: EdgeInsets.only(bottom: 7),
                  child: Icon(
                    Icons.more_horiz,
                    size: 20.0,
                  ),
                ),
                label: '더보기',
              ),
            ],
          ),
        )));
  }

  @override
  Widget build(BuildContext context) {
    final ControllerPages landingPageController =
        Get.put(ControllerPages(), permanent: false);
    return Scaffold(
      resizeToAvoidBottomInset: false,
      bottomNavigationBar:
          buildBottomNavigationMenu(context, landingPageController),
      body: SafeArea(
        child: Obx(() => IndexedStack(
              index: landingPageController.tabIndex.value,
              children: [
                FirstPage(),
                SecondPage(),
                ThirdPage(),
                FourthPage(),
                FifthPage()
              ],
            )),
      ),
    );
  }
}
