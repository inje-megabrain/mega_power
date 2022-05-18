import 'package:flutter/material.dart';
import 'package:get/get.dart';

class Event {
  final String? title;
  Event({@required this.title});
  String toString() => this.title!;
}
