import 'package:campus_flutter_app/UserPages/Page1/Calendar/calendar_ui.dart';

import './Calendar/calendar_ui.dart';
import './Calendar/calendar_event.dart';

import 'package:flutter/material.dart';
import 'package:get/get.dart';

class FirstPage extends StatefulWidget {
  FirstPage({Key? key}) : super(key: key);

  @override
  State<FirstPage> createState() => _FirstPageState();
}

class _FirstPageState extends State<FirstPage> {
  @override
  Widget build(BuildContext context) {
    return Calendar();
  }
}
