import 'package:campus_flutter_app/PageController/bottom_bar.dart';
import 'package:flutter/material.dart';
import 'package:get/get.dart';
import 'package:intl/date_symbol_data_local.dart';

void main() {
  initializeDateFormatting()
      .then((_) => runApp(GetMaterialApp(home: PagesControllerWidget())));
}
