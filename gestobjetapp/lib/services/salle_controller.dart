import 'dart:convert';
import 'dart:io';

import 'package:flutter/material.dart';
import 'package:http/http.dart' as http;

class Salle {
  final int id;
  final String numero;
  final String batiment;

  const Salle({required this.id, required this.batiment, required this.numero});

  factory Salle.fromJson(Map<String, dynamic> json) {
    return Salle(
      id: json['id'] as int,
      numero: json['numero'] as String,
      batiment: json['batiment'] as String,
    );
  }
}

const baseUrl = "http://localhost:3333/api/salle";
Future<List<Salle>> getAllSalle() async {
  final response = await http.get(Uri.parse(baseUrl));
  if (response.statusCode == 200) {
    final jsonBody = jsonDecode(response.body);
    final List<dynamic> data = jsonBody['data'];
    return data.map((json) => Salle.fromJson(json)).toList();
  } else {
    throw Exception('failed to load Salles');
  }
}

Future<Salle> getSalleById(int id) async {
  final response = await http.get(Uri.parse('$baseUrl/$id'));
  if (response.statusCode == 200) {
    final dynamic body = jsonDecode(response.body);
    return Salle.fromJson(body);
  } else {
    throw Exception('failed to load classes');
  }
}
