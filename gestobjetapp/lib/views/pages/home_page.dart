import 'package:flutter/material.dart';
import 'package:gestobjetapp/services/salle_controller.dart';
import 'package:gestobjetapp/views/widgets/salle_widget.dart';

class HomePage extends StatefulWidget {
  const HomePage({super.key});

  @override
  State<HomePage> createState() => _HomePageState();
}

class _HomePageState extends State<HomePage> {
  late Future<List<Salle>> futureSalles;
  @override
  void initState() {
    super.initState();
    futureSalles = getAllSalle();
  }

  @override
  Widget build(BuildContext context) {
    return FutureBuilder<List<Salle>>(
      future: futureSalles,
      builder: (context, snapshot) {
        if (snapshot.connectionState == ConnectionState.waiting) {
          print('snapshot.data = ${snapshot.data}');
          return const Center(child: CircularProgressIndicator());
        } else if (snapshot.hasError) {
          print('snapshot.data = ${snapshot.data}');
          return Center(child: Text('Erreur ${snapshot.error}'));
        } else if (snapshot.data == null || snapshot.data!.isEmpty) {
          print('snapshot.data = ${snapshot.data}');
          return const Center(child: Text('Aucun livre dispo'));
        } else {
          List<Salle> salles = snapshot.data!;

          return Column(
            children: [
              Expanded(
                child: ListView.builder(
                  itemCount: salles.length,
                  itemBuilder: (context, index) {
                    final salle = salles[index];
                    return SalleWidget(salle);
                  },
                ),
              ),
            ],
          );
        }
      },
    );
  }
}
