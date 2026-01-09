import 'package:flutter/material.dart';

class ObjetAddPage extends StatefulWidget {
  const ObjetAddPage({super.key});

  @override
  State<ObjetAddPage> createState() => _ObjetAddPageState();
}

class _ObjetAddPageState extends State<ObjetAddPage> {
  final _formKey = GlobalKey<FormState>();

  @override
  Widget build(BuildContext context) {
    // CORRECTION : On commence par un Scaffold
    return Scaffold(
      appBar: AppBar(
        title: const Text("Ajouter un objet"),
      ),
      // On ajoute un Padding pour que le formulaire ne colle pas aux bords
      body: Padding(
        padding: const EdgeInsets.all(16.0),
        child: Form(
          key: _formKey,
          child: Column(
            children: [
              TextFormField(
                decoration: const InputDecoration(
                  labelText: "Nom de l'objet", // Ajout d'un label pour l'UX
                  border: OutlineInputBorder(), // Ajout d'une bordure
                ),
                validator: (value) {
                  if (value == null || value.isEmpty) {
                    return "Il faut entrer du texte ici";
                  }
                  return null;
                },
              ),
              const SizedBox(height: 20), // Espace entre le champ et le bouton
              ElevatedButton(
                onPressed: () {
                  if (_formKey.currentState!.validate()) {
                    ScaffoldMessenger.of(context).showSnackBar(
                      const SnackBar(content: Text("Envoi des données...")),
                    );
                    // Ici, vous mettrez plus tard votre appel API pour créer l'objet
                  }
                },
                child: const Text("Ajouter"),
              )
            ],
          ),
        ),
      ),
    );
  }
}