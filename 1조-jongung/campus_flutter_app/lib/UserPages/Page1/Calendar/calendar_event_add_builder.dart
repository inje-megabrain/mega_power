import 'package:flutter/material.dart';
import 'package:get/get.dart';
import 'package:table_calendar/table_calendar.dart';
import 'calendar_event.dart';
import 'package:intl/intl.dart';
import 'package:time_pickerr/time_pickerr.dart';
import 'calendar_ui.dart';

class AddEventonCalendar extends StatefulWidget {
  AddEventonCalendar(
      {this.selectedDay,
      this.eventController,
      this.format,
      this.selectedEvents});
  var selectedDay, eventController, format, selectedEvents;
  @override
  State<AddEventonCalendar> createState() => _AddEventonCalendarState();
}

class _AddEventonCalendarState extends State<AddEventonCalendar> {
  TimeOfDay selectedTime = TimeOfDay.now();

  @override
  Widget build(BuildContext context) {
    return Column(
      children: [
        SizedBox(
          height: 25,
        ),
        Center(
          child: Text(DateFormat('yyyy년 MM월 dd일').format(widget.selectedDay) +
              " 일정 추가"),
        ),
        Container(
          margin: EdgeInsets.fromLTRB(20, 10, 20, 35),
          child: Column(children: [
            Container(
              margin: EdgeInsets.fromLTRB(0, 20, 0, 0),
              child: TextField(
                decoration: InputDecoration(
                  labelText: "제목",
                  focusedBorder: OutlineInputBorder(
                    borderSide: const BorderSide(
                        color: Color.fromARGB(255, 179, 37, 99), width: 1.5),
                    borderRadius: BorderRadius.circular(
                      10.0,
                    ),
                  ),
                  enabledBorder: OutlineInputBorder(
                    borderSide: BorderSide(
                        color: Color.fromARGB(255, 179, 37, 99), width: 1.5),
                    borderRadius: BorderRadius.circular(
                      10.0,
                    ),
                  ),
                ),
                controller: widget.eventController,
              ),
            ),
            Container(
              margin: EdgeInsets.fromLTRB(0, 30, 0, 0),
              child: ListTile(
                leading: Text("시작 시간"),
                onTap: () {
                  showTimePicker(
                      builder: (context, child) => Theme(
                            data: Theme.of(context).copyWith(
                              colorScheme: ColorScheme.light(
                                primary: Color.fromARGB(255, 179, 37, 99),
                              ),
                              textButtonTheme: TextButtonThemeData(
                                style: TextButton.styleFrom(
                                  primary: Color.fromARGB(
                                      255, 179, 37, 99), // button text color
                                ),
                              ),
                            ),
                            child: child!,
                          ),
                      context: context,
                      initialTime: selectedTime,
                      initialEntryMode: TimePickerEntryMode.dial,
                      confirmText: "설정",
                      cancelText: "취소",
                      helpText: "시작 시간");
                },
                shape: RoundedRectangleBorder(
                  borderRadius: BorderRadius.circular(10.0),
                  side: BorderSide(
                      color: Color.fromARGB(255, 179, 37, 99), width: 1.5),
                ),
                title: Text("00 : 00"),
                trailing: Icon(
                  Icons.schedule,
                  color: Color.fromARGB(255, 179, 37, 99),
                ),
              ),
            ),
            Container(
              margin: EdgeInsets.fromLTRB(0, 30, 0, 0),
              child: ListTile(
                leading: Text("마침 시간"),
                onTap: () {
                  showTimePicker(
                      builder: (context, child) => Theme(
                            data: Theme.of(context).copyWith(
                              colorScheme: ColorScheme.light(
                                primary: Color.fromARGB(255, 179, 37, 99),
                              ),
                              textButtonTheme: TextButtonThemeData(
                                style: TextButton.styleFrom(
                                  primary: Color.fromARGB(
                                      255, 179, 37, 99), // button text color
                                ),
                              ),
                            ),
                            child: child!,
                          ),
                      context: context,
                      initialTime: selectedTime,
                      initialEntryMode: TimePickerEntryMode.dial,
                      confirmText: "설정",
                      cancelText: "취소",
                      helpText: "마침 시간");
                },
                shape: RoundedRectangleBorder(
                  borderRadius: BorderRadius.circular(10.0),
                  side: BorderSide(
                      color: Color.fromARGB(255, 179, 37, 99), width: 1.5),
                ),
                title: Text("00 : 00"),
                trailing: Icon(
                  Icons.schedule,
                  color: Color.fromARGB(255, 179, 37, 99),
                ),
              ),
            )
          ]),
        ),
        Row(mainAxisAlignment: MainAxisAlignment.spaceAround, children: [
          TextButton(
              onPressed: () {
                if (widget.eventController.text.isEmpty) {
                  Get.back();
                  return;
                } else {
                  if (widget.selectedEvents[widget.selectedDay] != null) {
                    widget.selectedEvents[widget.selectedDay]?.add(
                      Event(title: widget.eventController.text),
                    );
                  } else {
                    widget.selectedEvents[widget.selectedDay] = [
                      Event(title: widget.eventController.text)
                    ];
                  }
                  Get.back();
                  widget.eventController.clear();
                  return;
                }
              },
              child: Text("추가")),
          TextButton(
              onPressed: () {
                Get.back();
              },
              child: Text("취소"))
        ]),
      ],
    );
  }
}
