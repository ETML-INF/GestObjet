import 'package:flutter/material.dart';
import 'package:gestobjetapp/services/salle_controller.dart';

class SalleWidget extends StatelessWidget {
  final Salle salle;
  const SalleWidget(this.salle, {super.key});

  @override
  Widget build(BuildContext context) {
    return InkWell(
      splashColor: Colors.black,
      onTap: () => {print("touch salle")},
      child: Container(
        width: 300,
        height: 300,
        decoration: BoxDecoration(
          color: Colors.deepPurple,
          borderRadius: BorderRadius.circular(16),
        ),
        child: Center(child: Text(salle.numero)),
      ),
    );
  }
}
