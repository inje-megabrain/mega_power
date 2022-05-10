import 'package:flutter/material.dart';
import 'package:get/get.dart';
import 'package:table_calendar/table_calendar.dart';
import 'calendar_event.dart';
import 'package:intl/intl.dart';
import 'calendar_event_add_builder.dart';

late Map<DateTime, List<Event>> selectedEvents;
late DateTime selectedDay = DateTime.now();
late DateTime focusedDay = DateTime.now();
final _onBottomScreen = ValueNotifier<bool>(false);

class Calendar extends StatefulWidget {
  const Calendar({Key? key}) : super(key: key);

  @override
  State<Calendar> createState() => _CalendarState();
}

class _CalendarState extends State<Calendar> {
  CalendarFormat format = CalendarFormat.month;
  TextEditingController eventController = TextEditingController();

  @override
  void initState() {
    // TODO: implement initState
    selectedEvents = {};
    super.initState();
  }

  @override
  void dispose() {
    eventController.dispose();
  }

  void changeState() {
    setState(() {
      format = CalendarFormat.month;
    });
  }

  List<Event> _getEventsfromDay(DateTime date) {
    return selectedEvents[date] ?? [];
  }

  @override
  Widget build(BuildContext context) {
    var width = MediaQuery.of(context).size.width;
    var height = MediaQuery.of(context).size.height;
    var padding = MediaQuery.of(context).padding;
    return Container(
      height: double.infinity,
      child: Column(
        mainAxisAlignment: MainAxisAlignment.spaceBetween,
        children: [
          Expanded(
            child: Column(children: [
              Container(
                margin: EdgeInsets.fromLTRB(5, 0, 5, 0),
                child: TableCalendar(
                    rowHeight: height * 0.068,
                    daysOfWeekHeight: 60,
                    firstDay: DateTime.utc(2010, 1, 1),
                    lastDay: DateTime.utc(2030, 12, 31),
                    locale: 'ko-KR',
                    calendarFormat: format,
                    focusedDay: selectedDay,
                    startingDayOfWeek: StartingDayOfWeek.sunday,
                    daysOfWeekVisible: true,
                    //날짜
                    onDaySelected: (DateTime selectDay, DateTime focusDay) {
                      setState(() {
                        selectedDay = selectDay;
                        focusedDay = focusDay;
                      });
                    },
                    selectedDayPredicate: (DateTime date) {
                      return isSameDay(selectedDay, date);
                    },
                    eventLoader: _getEventsfromDay,
                    daysOfWeekStyle: DaysOfWeekStyle(
                        weekendStyle: TextStyle(color: Colors.red[900])),

                    //캘린더 스타일
                    calendarStyle: CalendarStyle(
                        weekendTextStyle: TextStyle(color: Colors.red[900]),
                        isTodayHighlighted: true,
                        selectedDecoration: BoxDecoration(
                            color: Color.fromARGB(255, 195, 106, 106),
                            shape: BoxShape.circle),
                        todayDecoration: BoxDecoration(
                            color: Color.fromARGB(140, 195, 120, 106),
                            shape: BoxShape.circle),
                        defaultDecoration:
                            BoxDecoration(shape: BoxShape.circle),
                        weekendDecoration:
                            BoxDecoration(shape: BoxShape.circle)),
                    headerStyle: HeaderStyle(
                        leftChevronIcon: Icon(
                          Icons.chevron_left,
                          color: Colors.black,
                        ),
                        rightChevronIcon: Icon(
                          Icons.chevron_right,
                          color: Colors.black,
                        ),
                        formatButtonVisible: false,
                        titleCentered: true,
                        formatButtonShowsNext: false,
                        headerPadding: EdgeInsets.symmetric(horizontal: 5.0))),
              ),
              Expanded(
                child: ListView(
                    shrinkWrap: true,
                    children: [
                      ..._getEventsfromDay(selectedDay).map(
                        (Event event) => ListTile(
                          title: Text(event.title!),
                        ),
                      )
                    ].toList()),
              ),
            ]),
          ),
          Container(
              child: Align(
            alignment: Alignment.bottomCenter,
            child: ElevatedButton.icon(
                onPressed: () {
                  setState(() {
                    format = CalendarFormat.twoWeeks;
                  });
                  Get.bottomSheet(
                      AddEventonCalendar(
                        selectedDay: selectedDay,
                        eventController: eventController,
                        format: format,
                        selectedEvents: selectedEvents,
                      ),
                      backgroundColor: Colors.white,
                      elevation: 1,
                      ignoreSafeArea: false,
                      shape: RoundedRectangleBorder(
                        borderRadius: BorderRadius.circular(20),
                      )).then(((value) => changeState()));
                },
                label: Text("일정 추가"),
                icon: Icon(Icons.add),
                style: ElevatedButton.styleFrom(
                  shape: RoundedRectangleBorder(
                      borderRadius: BorderRadius.circular(0)),
                  primary: Color.fromARGB(255, 195, 106, 106),
                  minimumSize: Size(width / 1, height / 18),
                )),
          ))
        ],
      ),
    );
  }
}
