import 'package:flutter/material.dart';

Future<Salle> getObjetsBySalle(int id) async {
  final response = await http.get(Uri.parse('$baseUrl/$id'));
  if (response.statusCode == 200) {
    final dynamic body = jsonDecode(response.body);
    return Salle.fromJson(body);
  } else {
    throw Exception('failed to load classes');
  }
}
