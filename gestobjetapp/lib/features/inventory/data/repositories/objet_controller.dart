import 'package:gestobjetapp/core/services/api_client.dart';
import 'dart:convert';
import 'package:http/http.dart' as http;
import 'package:gestobjetapp/features/inventory/data/models/objet_model.dart';

const baseUrl = "http://localhost:3333/api";

class ObjetRepository {
  final ApiClient _apiClient;

  ObjetRepository(this._apiClient);

  Future<List<Objet>> getObjetBySalle(String id) async {
    final response = await _apiClient.get('/salle/$id/objets');
    final dynamic jsonBody = jsonDecode(response.body);

    return (jsonBody as List)
        .map((data) => Objet.fromJson(data as Map<String, dynamic>))
        .toList();
  }

  Future<http.Response> postObjet(
    String qrCode,
    String typeId,
    String salleId,
  ) async {
    final response = await _apiClient.post(
      '/objet/',
      body: {'qrCode': qrCode, 'type': typeId, 'salles': salleId},
    );
    if (response.statusCode == 200) {
      return response;
    } else {
      throw Exception('failed to create object');
    }
  }
}
