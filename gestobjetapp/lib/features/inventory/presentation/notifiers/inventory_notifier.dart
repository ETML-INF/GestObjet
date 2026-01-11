import 'package:flutter/foundation.dart';
import 'package:flutter/material.dart';
import 'package:gestobjetapp/features/inventory/data/models/objet_model.dart';
import 'package:gestobjetapp/features/inventory/data/repositories/objet_controller.dart';

class InventoryNotifier extends ChangeNotifier {
  final ObjetRepository _repository;

  bool isLoading = false;

  String? errorMessage;

  InventoryNotifier(this._repository);

  Future<bool> createObjet(String qrCode, String typeId, String salleId) async {
    isLoading = true;
    errorMessage = null;
    notifyListeners();

    try {
      await _repository.postObjet(qrCode, typeId, salleId);

      isLoading = false;
      notifyListeners();
      return true;
    } catch (e) {
      isLoading = false;
      errorMessage = e.toString();
      notifyListeners();
      return false;
    }
  }

  Future<List<Objet>> getObjetBySalle(String salleId) async {
    isLoading = true;

    errorMessage = null;
    notifyListeners();
    try {
      List<Objet> objets = await _repository.getObjetBySalle(salleId);

      isLoading = false;
      notifyListeners();
      return objets;
    } catch (e) {
      isLoading = false;
      errorMessage = e.toString();
      notifyListeners();
      return <Objet>[];
    }
  }
}
