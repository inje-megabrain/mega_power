import 'package:get/get.dart';

class ControllerPages extends GetxController {
  var tabIndex = 2.obs;

  void changeTabIndex(int index) {
    tabIndex.value = index;
  }

  @override
  void onInit() {
    super.onInit();
  }

  @override
  void dispose() {
    super.dispose();
  }
}
