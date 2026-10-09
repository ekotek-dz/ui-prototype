// EKOTEK Dashboard Data
// Demonstration dataset for the proof-of-concept analytics layer.
// Context: front-of-house plate-waste monitoring for the Algerian HORECA market.
// All monetary values are in Algerian Dinar (DZD).
const dashboardData = {
    kpis: {
        totalWaste: {
            value: 2847,
            unit: 'kg',
            change: -12.3,
            trend: [120, 115, 130, 125, 118, 110, 105]
        },
        wasteCost: {
            value: 2184000,
            unit: 'DZD',
            change: -8.5,
            trend: [108000, 101000, 110000, 105000, 102000, 97000, 93000]
        },
        recyclingRate: {
            value: 67.8,
            unit: '%',
            change: 4.2,
            progress: 67.8
        },
        wastePerCustomer: {
            value: 0.42,
            unit: 'kg',
            change: -6.1,
            trend: [0.48, 0.46, 0.44, 0.43, 0.42, 0.41, 0.40]
        },
        co2Impact: {
            value: 4230,
            unit: 'kg CO₂e',
            change: -15.2,
            trend: [200, 190, 185, 180, 175, 165, 160]
        },
        goalProgress: {
            value: 78,
            unit: '%',
            target: 100,
            label: 'On track to 20% reduction'
        }
    },

    wasteOverTime: [
        { date: '2026-01-09', total: 120, food: 92, recyclables: 28 },
        { date: '2026-01-10', total: 115, food: 88, recyclables: 27 },
        { date: '2026-01-11', total: 130, food: 100, recyclables: 30 },
        { date: '2026-01-12', total: 125, food: 96, recyclables: 29 },
        { date: '2026-01-13', total: 118, food: 90, recyclables: 28 },
        { date: '2026-01-14', total: 110, food: 84, recyclables: 26 },
        { date: '2026-01-15', total: 105, food: 80, recyclables: 25 },
        { date: '2026-01-16', total: 122, food: 94, recyclables: 28 },
        { date: '2026-01-17', total: 128, food: 98, recyclables: 30 },
        { date: '2026-01-18', total: 112, food: 86, recyclables: 26 },
        { date: '2026-01-19', total: 108, food: 83, recyclables: 25 },
        { date: '2026-01-20', total: 116, food: 89, recyclables: 27 },
        { date: '2026-01-21', total: 119, food: 91, recyclables: 28 },
        { date: '2026-01-22', total: 113, food: 87, recyclables: 26 },
        { date: '2026-01-23', total: 107, food: 82, recyclables: 25 },
        { date: '2026-01-24', total: 102, food: 78, recyclables: 24 },
        { date: '2026-01-25', total: 114, food: 88, recyclables: 26 },
        { date: '2026-01-26', total: 118, food: 90, recyclables: 28 },
        { date: '2026-01-27', total: 111, food: 85, recyclables: 26 },
        { date: '2026-01-28', total: 106, food: 81, recyclables: 25 },
        { date: '2026-01-29', total: 109, food: 84, recyclables: 25 },
        { date: '2026-01-30', total: 115, food: 88, recyclables: 27 },
        { date: '2026-01-31', total: 110, food: 84, recyclables: 26 },
        { date: '2026-02-01', total: 104, food: 80, recyclables: 24 },
        { date: '2026-02-02', total: 98, food: 75, recyclables: 23 },
        { date: '2026-02-03', total: 112, food: 86, recyclables: 26 },
        { date: '2026-02-04', total: 108, food: 83, recyclables: 25 },
        { date: '2026-02-05', total: 103, food: 79, recyclables: 24 },
        { date: '2026-02-06', total: 99, food: 76, recyclables: 23 },
        { date: '2026-02-07', total: 105, food: 80, recyclables: 25 }
    ],

    // Top wasted dishes. Cost = monthly waste cost in DZD.
    topWastedDishes: [
        { name: 'Couscous Royal', waste_kg: 45.2, cost: 78000, severity: 'high' },
        { name: 'Méchoui d\'Agneau', waste_kg: 38.7, cost: 96000, severity: 'high' },
        { name: 'Loup Grillé', waste_kg: 28.5, cost: 84000, severity: 'high' },
        { name: 'Tajine Zitoune', waste_kg: 32.1, cost: 41000, severity: 'medium' },
        { name: 'Chorba Frik', waste_kg: 26.8, cost: 19000, severity: 'medium' },
        { name: 'Poulet Rôti', waste_kg: 24.3, cost: 31000, severity: 'medium' },
        { name: 'Rechta', waste_kg: 22.7, cost: 24000, severity: 'medium' },
        { name: 'Bourek Viande', waste_kg: 19.4, cost: 27000, severity: 'medium' },
        { name: 'Makroud', waste_kg: 17.2, cost: 14000, severity: 'low' },
        { name: 'Frites Maison', waste_kg: 15.8, cost: 9000, severity: 'low' }
    ],

    wasteBySource: [
        { source: 'Prep', percentage: 45, kg: 1281 },
        { source: 'Plate Waste', percentage: 30, kg: 854 },
        { source: 'Inventory', percentage: 25, kg: 712 }
    ],

    wasteComposition: [
        { week: 'Week 1', organic: 450, plastic: 120, paper: 80, glass: 45, metal: 30 },
        { week: 'Week 2', organic: 420, plastic: 110, paper: 75, glass: 40, metal: 28 },
        { week: 'Week 3', organic: 440, plastic: 115, paper: 78, glass: 42, metal: 29 },
        { week: 'Week 4', organic: 410, plastic: 105, paper: 72, glass: 38, metal: 26 }
    ],

    predictions: [
        { date: '2026-02-01', actual: 104, predicted: null, confidence_low: null, confidence_high: null },
        { date: '2026-02-02', actual: 98, predicted: null, confidence_low: null, confidence_high: null },
        { date: '2026-02-03', actual: 112, predicted: null, confidence_low: null, confidence_high: null },
        { date: '2026-02-04', actual: 108, predicted: null, confidence_low: null, confidence_high: null },
        { date: '2026-02-05', actual: 103, predicted: null, confidence_low: null, confidence_high: null },
        { date: '2026-02-06', actual: 99, predicted: null, confidence_low: null, confidence_high: null },
        { date: '2026-02-07', actual: 105, predicted: null, confidence_low: null, confidence_high: null },
        { date: '2026-02-08', actual: null, predicted: 108, confidence_low: 95, confidence_high: 121 },
        { date: '2026-02-09', actual: null, predicted: 106, confidence_low: 93, confidence_high: 119 },
        { date: '2026-02-10', actual: null, predicted: 103, confidence_low: 90, confidence_high: 116 },
        { date: '2026-02-11', actual: null, predicted: 110, confidence_low: 97, confidence_high: 123 },
        { date: '2026-02-12', actual: null, predicted: 107, confidence_low: 94, confidence_high: 120 },
        { date: '2026-02-13', actual: null, predicted: 104, confidence_low: 91, confidence_high: 117 },
        { date: '2026-02-14', actual: null, predicted: 101, confidence_low: 88, confidence_high: 114 }
    ],

    // Pilot venues across the Béjaïa–Algiers corridor. Cost in DZD (monthly).
    locationPerformance: [
        { name: 'Le Dauphin — Béjaïa', totalWaste: 450, foodWaste: 350, recyclingRate: 72, cost: 388000, trend: [48, 46, 45, 44, 43], status: 'good' },
        { name: 'Brasserie des Hammadites — Tichy', totalWaste: 380, foodWaste: 295, recyclingRate: 68, cost: 330000, trend: [42, 40, 38, 37, 38], status: 'good' },
        { name: 'Hôtel Royal — Béjaïa', totalWaste: 520, foodWaste: 405, recyclingRate: 58, cost: 451000, trend: [55, 54, 53, 52, 52], status: 'moderate' },
        { name: 'Restaurant Tiziri — Alger', totalWaste: 420, foodWaste: 325, recyclingRate: 70, cost: 362000, trend: [45, 44, 43, 42, 42], status: 'good' },
        { name: 'La Citadelle — Alger', totalWaste: 480, foodWaste: 372, recyclingRate: 65, cost: 416000, trend: [50, 49, 48, 48, 48], status: 'moderate' },
        { name: 'Sofitel Le Jardin — Alger', totalWaste: 620, foodWaste: 500, recyclingRate: 52, cost: 537000, trend: [65, 64, 63, 63, 62], status: 'bad' },
        { name: 'Cafétéria ESTIN — Béjaïa', totalWaste: 350, foodWaste: 275, recyclingRate: 74, cost: 302000, trend: [38, 36, 35, 35, 35], status: 'good' },
        { name: 'Le Méditerranée — Béjaïa', totalWaste: 290, foodWaste: 225, recyclingRate: 76, cost: 251000, trend: [32, 31, 30, 29, 29], status: 'good' },
        { name: 'El Djenina — Alger', totalWaste: 440, foodWaste: 340, recyclingRate: 67, cost: 380000, trend: [47, 46, 45, 44, 44], status: 'good' },
        { name: 'Auberge Yemma Gouraya — Béjaïa', totalWaste: 510, foodWaste: 398, recyclingRate: 60, cost: 442000, trend: [54, 53, 52, 51, 51], status: 'moderate' },
        { name: 'Les Hammadites Buffet — Tichy', totalWaste: 390, foodWaste: 305, recyclingRate: 69, cost: 338000, trend: [42, 41, 40, 39, 39], status: 'good' },
        { name: 'Campus Targa — Béjaïa', totalWaste: 330, foodWaste: 258, recyclingRate: 73, cost: 286000, trend: [36, 35, 34, 33, 33], status: 'good' }
    ],

    // Recent plate/prep waste events. Cost per event in DZD.
    recentEvents: [
        { datetime: '2026-02-08 21:45', location: 'Le Dauphin — Béjaïa', wasteType: 'Food', source: 'Plate', item: 'Loup Grillé', amount: 2.3, cost: 3980, status: 'alert' },
        { datetime: '2026-02-08 21:32', location: 'Brasserie des Hammadites — Tichy', wasteType: 'Food', source: 'Prep', item: 'Salade Méchouia', amount: 1.8, cost: 1680, status: 'normal' },
        { datetime: '2026-02-08 21:20', location: 'Sofitel Le Jardin — Alger', wasteType: 'Plastic', source: 'Inventory', item: 'Bouteilles d\'eau', amount: 3.5, cost: 1100, status: 'normal' },
        { datetime: '2026-02-08 21:05', location: 'Hôtel Royal — Béjaïa', wasteType: 'Food', source: 'Plate', item: 'Bourek Viande', amount: 1.2, cost: 2470, status: 'alert' },
        { datetime: '2026-02-08 20:52', location: 'Restaurant Tiziri — Alger', wasteType: 'Food', source: 'Prep', item: 'Légumes', amount: 2.1, cost: 920, status: 'normal' },
        { datetime: '2026-02-08 20:40', location: 'Le Dauphin — Béjaïa', wasteType: 'Paper', source: 'Inventory', item: 'Serviettes', amount: 0.8, cost: 340, status: 'normal' },
        { datetime: '2026-02-08 20:28', location: 'Hôtel Royal — Béjaïa', wasteType: 'Food', source: 'Plate', item: 'Tajine Zitoune', amount: 1.9, cost: 1920, status: 'alert' },
        { datetime: '2026-02-08 20:15', location: 'Cafétéria ESTIN — Béjaïa', wasteType: 'Food', source: 'Prep', item: 'Frites Maison', amount: 1.5, cost: 610, status: 'normal' },
        { datetime: '2026-02-08 20:02', location: 'Le Méditerranée — Béjaïa', wasteType: 'Food', source: 'Inventory', item: 'Produits laitiers périmés', amount: 2.7, cost: 2270, status: 'critical' },
        { datetime: '2026-02-08 19:48', location: 'El Djenina — Alger', wasteType: 'Glass', source: 'Inventory', item: 'Bouteilles cassées', amount: 1.4, cost: 430, status: 'normal' },
        { datetime: '2026-02-08 19:35', location: 'Auberge Yemma Gouraya — Béjaïa', wasteType: 'Food', source: 'Plate', item: 'Méchoui d\'Agneau', amount: 1.6, cost: 2890, status: 'alert' },
        { datetime: '2026-02-08 19:20', location: 'Les Hammadites Buffet — Tichy', wasteType: 'Food', source: 'Prep', item: 'Légumes', amount: 1.3, cost: 760, status: 'normal' },
        { datetime: '2026-02-08 19:08', location: 'Campus Targa — Béjaïa', wasteType: 'Metal', source: 'Inventory', item: 'Boîtes conserve', amount: 0.9, cost: 240, status: 'normal' },
        { datetime: '2026-02-08 18:55', location: 'Le Dauphin — Béjaïa', wasteType: 'Food', source: 'Plate', item: 'Makroud', amount: 0.7, cost: 1150, status: 'normal' },
        { datetime: '2026-02-08 18:42', location: 'Sofitel Le Jardin — Alger', wasteType: 'Food', source: 'Prep', item: 'Couscous Royal', amount: 3.2, cost: 2640, status: 'alert' },
        { datetime: '2026-02-08 18:28', location: 'Brasserie des Hammadites — Tichy', wasteType: 'Food', source: 'Plate', item: 'Poulet Rôti', amount: 1.1, cost: 1240, status: 'normal' },
        { datetime: '2026-02-08 18:15', location: 'Hôtel Royal — Béjaïa', wasteType: 'Food', source: 'Inventory', item: 'Produits frais périmés', amount: 2.4, cost: 1960, status: 'critical' },
        { datetime: '2026-02-08 18:02', location: 'Restaurant Tiziri — Alger', wasteType: 'Plastic', source: 'Inventory', item: 'Barquettes', amount: 1.2, cost: 460, status: 'normal' },
        { datetime: '2026-02-08 17:48', location: 'El Djenina — Alger', wasteType: 'Food', source: 'Prep', item: 'Poulet', amount: 1.9, cost: 1590, status: 'normal' },
        { datetime: '2026-02-08 17:35', location: 'Cafétéria ESTIN — Béjaïa', wasteType: 'Paper', source: 'Inventory', item: 'Cartons', amount: 0.6, cost: 200, status: 'normal' },
        { datetime: '2026-02-08 17:22', location: 'Le Dauphin — Béjaïa', wasteType: 'Food', source: 'Plate', item: 'Rechta', amount: 1.4, cost: 1480, status: 'alert' },
        { datetime: '2026-02-08 17:10', location: 'Brasserie des Hammadites — Tichy', wasteType: 'Food', source: 'Prep', item: 'Pain (Khobz)', amount: 2.2, cost: 590, status: 'normal' },
        { datetime: '2026-02-08 16:58', location: 'Hôtel Royal — Béjaïa', wasteType: 'Food', source: 'Plate', item: 'Chorba Frik', amount: 1.7, cost: 980, status: 'normal' },
        { datetime: '2026-02-08 16:45', location: 'La Citadelle — Alger', wasteType: 'Food', source: 'Inventory', item: 'Fruits de mer', amount: 3.1, cost: 5740, status: 'critical' },
        { datetime: '2026-02-08 16:32', location: 'Restaurant Tiziri — Alger', wasteType: 'Food', source: 'Prep', item: 'Pommes de terre', amount: 1.9, cost: 480, status: 'normal' },
        { datetime: '2026-02-08 16:20', location: 'Sofitel Le Jardin — Alger', wasteType: 'Plastic', source: 'Inventory', item: 'Couverts jetables', amount: 0.8, cost: 280, status: 'normal' },
        { datetime: '2026-02-08 16:08', location: 'Cafétéria ESTIN — Béjaïa', wasteType: 'Food', source: 'Plate', item: 'Sandwich', amount: 1.2, cost: 720, status: 'normal' },
        { datetime: '2026-02-08 15:55', location: 'Le Méditerranée — Béjaïa', wasteType: 'Food', source: 'Prep', item: 'Bouillon', amount: 2.5, cost: 1530, status: 'alert' },
        { datetime: '2026-02-08 15:42', location: 'El Djenina — Alger', wasteType: 'Food', source: 'Plate', item: 'Risotto', amount: 1.6, cost: 1780, status: 'normal' },
        { datetime: '2026-02-08 15:30', location: 'Auberge Yemma Gouraya — Béjaïa', wasteType: 'Glass', source: 'Inventory', item: 'Bouteilles', amount: 2.1, cost: 610, status: 'normal' },
        { datetime: '2026-02-08 15:18', location: 'Les Hammadites Buffet — Tichy', wasteType: 'Food', source: 'Prep', item: 'Salade', amount: 1.3, cost: 840, status: 'normal' },
        { datetime: '2026-02-08 15:05', location: 'Campus Targa — Béjaïa', wasteType: 'Food', source: 'Plate', item: 'Quiche', amount: 0.9, cost: 1050, status: 'normal' },
        { datetime: '2026-02-08 14:52', location: 'Le Dauphin — Béjaïa', wasteType: 'Food', source: 'Inventory', item: 'Viande périmée', amount: 4.2, cost: 7610, status: 'critical' },
        { datetime: '2026-02-08 14:40', location: 'Brasserie des Hammadites — Tichy', wasteType: 'Paper', source: 'Inventory', item: 'Menus', amount: 0.5, cost: 160, status: 'normal' },
        { datetime: '2026-02-08 14:28', location: 'Hôtel Royal — Béjaïa', wasteType: 'Food', source: 'Prep', item: 'Pâtes', amount: 2.3, cost: 1290, status: 'normal' },
        { datetime: '2026-02-08 14:15', location: 'La Citadelle — Alger', wasteType: 'Food', source: 'Plate', item: 'Crevettes', amount: 1.1, cost: 2230, status: 'alert' },
        { datetime: '2026-02-08 14:02', location: 'Restaurant Tiziri — Alger', wasteType: 'Metal', source: 'Inventory', item: 'Conserves', amount: 1.4, cost: 380, status: 'normal' },
        { datetime: '2026-02-08 13:50', location: 'Sofitel Le Jardin — Alger', wasteType: 'Food', source: 'Prep', item: 'Marc de café', amount: 3.8, cost: 970, status: 'normal' },
        { datetime: '2026-02-08 13:38', location: 'Cafétéria ESTIN — Béjaïa', wasteType: 'Food', source: 'Plate', item: 'Crêpes', amount: 1.5, cost: 930, status: 'normal' },
        { datetime: '2026-02-08 13:25', location: 'Le Méditerranée — Béjaïa', wasteType: 'Plastic', source: 'Inventory', item: 'Pailles', amount: 0.3, cost: 110, status: 'normal' },
        { datetime: '2026-02-08 13:12', location: 'El Djenina — Alger', wasteType: 'Food', source: 'Prep', item: 'Fruits', amount: 1.8, cost: 1130, status: 'normal' },
        { datetime: '2026-02-08 13:00', location: 'Auberge Yemma Gouraya — Béjaïa', wasteType: 'Food', source: 'Inventory', item: 'Œufs périmés', amount: 2.6, cost: 1720, status: 'critical' },
        { datetime: '2026-02-08 12:48', location: 'Les Hammadites Buffet — Tichy', wasteType: 'Food', source: 'Plate', item: 'Omelette', amount: 0.8, cost: 760, status: 'normal' },
        { datetime: '2026-02-08 12:35', location: 'Campus Targa — Béjaïa', wasteType: 'Paper', source: 'Inventory', item: 'Serviettes', amount: 0.7, cost: 260, status: 'normal' },
        { datetime: '2026-02-08 12:22', location: 'Le Dauphin — Béjaïa', wasteType: 'Food', source: 'Prep', item: 'Merguez', amount: 1.4, cost: 1510, status: 'normal' },
        { datetime: '2026-02-08 12:10', location: 'Brasserie des Hammadites — Tichy', wasteType: 'Food', source: 'Plate', item: 'Pain grillé', amount: 1.0, cost: 470, status: 'normal' },
        { datetime: '2026-02-08 11:58', location: 'Hôtel Royal — Béjaïa', wasteType: 'Food', source: 'Inventory', item: 'Yaourt', amount: 1.6, cost: 1050, status: 'alert' },
        { datetime: '2026-02-08 11:45', location: 'La Citadelle — Alger', wasteType: 'Food', source: 'Prep', item: 'Pommes de terre rissolées', amount: 1.9, cost: 770, status: 'normal' },
        { datetime: '2026-02-08 11:32', location: 'Restaurant Tiziri — Alger', wasteType: 'Glass', source: 'Inventory', item: 'Bouteilles jus', amount: 1.2, cost: 480, status: 'normal' },
        { datetime: '2026-02-08 11:20', location: 'Sofitel Le Jardin — Alger', wasteType: 'Food', source: 'Plate', item: 'Croissant', amount: 0.9, cost: 610, status: 'normal' }
    ],

    // Food Waste Analytics Data
    foodWasteAnalytics: {
        // Ingredient-level tracking. Cost in DZD (monthly waste value).
        ingredientWaste: [
            { ingredient: 'Semoule', waste_kg: 125.3, cost: 29000, category: 'Féculents', wasteRate: 28, trend: 'increasing' },
            { ingredient: 'Tomates', waste_kg: 98.7, cost: 25000, category: 'Légumes', wasteRate: 22, trend: 'stable' },
            { ingredient: 'Agneau', waste_kg: 87.2, cost: 168000, category: 'Viande', wasteRate: 12, trend: 'decreasing' },
            { ingredient: 'Poulet', waste_kg: 76.5, cost: 57000, category: 'Viande', wasteRate: 15, trend: 'stable' },
            { ingredient: 'Loup (poisson)', waste_kg: 68.9, cost: 121000, category: 'Poisson', wasteRate: 18, trend: 'decreasing' },
            { ingredient: 'Pâtes', waste_kg: 64.3, cost: 17000, category: 'Féculents', wasteRate: 10, trend: 'stable' },
            { ingredient: 'Pommes de terre', waste_kg: 59.8, cost: 13000, category: 'Légumes', wasteRate: 20, trend: 'increasing' },
            { ingredient: 'Fromage', waste_kg: 52.4, cost: 52000, category: 'Produits laitiers', wasteRate: 16, trend: 'stable' },
            { ingredient: 'Pain (Khobz)', waste_kg: 48.6, cost: 20000, category: 'Féculents', wasteRate: 25, trend: 'decreasing' },
            { ingredient: 'Oignons', waste_kg: 45.2, cost: 9000, category: 'Légumes', wasteRate: 19, trend: 'stable' },
            { ingredient: 'Champignons', waste_kg: 42.1, cost: 26000, category: 'Légumes', wasteRate: 24, trend: 'increasing' },
            { ingredient: 'Poivrons', waste_kg: 38.7, cost: 20000, category: 'Légumes', wasteRate: 21, trend: 'stable' }
        ],

        // Pre-consumer waste by stage
        preConsumerWaste: [
            { stage: 'Réception', percentage: 8, kg: 102, description: 'Qualité, marchandise abîmée' },
            { stage: 'Stockage', percentage: 12, kg: 154, description: 'Détérioration, péremption' },
            { stage: 'Préparation', percentage: 35, kg: 449, description: 'Épluchage, parage, surdécoupe' },
            { stage: 'Cuisson', percentage: 25, kg: 321, description: 'Surcuisson, brûlé, tests' },
            { stage: 'Maintien', percentage: 20, kg: 255, description: 'Surproduction, limites de temps' }
        ],

        // Plate waste analysis. savings in DZD (monthly).
        plateWasteAnalysis: [
            { dish: 'Couscous Royal', avgWaste: 145, totalOrders: 312, wasteRate: 28, reason: 'Portion trop grande', savings: 78000 },
            { dish: 'Méchoui d\'Agneau', avgWaste: 95, totalOrders: 208, wasteRate: 35, reason: 'Portion trop grande', savings: 96000 },
            { dish: 'Tajine Zitoune', avgWaste: 88, totalOrders: 385, wasteRate: 22, reason: 'Taille de portion', savings: 41000 },
            { dish: 'Loup Grillé', avgWaste: 78, totalOrders: 285, wasteRate: 18, reason: 'Assaisonnement', savings: 84000 },
            { dish: 'Frites Maison', avgWaste: 125, totalOrders: 542, wasteRate: 42, reason: 'Portion excessive', savings: 9000 },
            { dish: 'Rechta', avgWaste: 72, totalOrders: 298, wasteRate: 20, reason: 'Quantité de sauce', savings: 24000 },
            { dish: 'Poulet Rôti', avgWaste: 65, totalOrders: 445, wasteRate: 15, reason: 'Taille de portion', savings: 31000 },
            { dish: 'Chorba Frik', avgWaste: 58, totalOrders: 356, wasteRate: 25, reason: 'Bol trop rempli', savings: 19000 }
        ],

        // Portion optimization recommendations. monthlySavings in DZD.
        portionOptimization: [
            { dish: 'Couscous Royal', currentPortion: 340, recommendedPortion: 280, reduction: 18, monthlySavings: 250000, confidence: 92, customerSatisfaction: 4.3 },
            { dish: 'Méchoui d\'Agneau', currentPortion: 285, recommendedPortion: 220, reduction: 23, monthlySavings: 167000, confidence: 88, customerSatisfaction: 4.5 },
            { dish: 'Frites Maison', currentPortion: 310, recommendedPortion: 225, reduction: 27, monthlySavings: 132000, confidence: 95, customerSatisfaction: 4.4 },
            { dish: 'Tajine Zitoune', currentPortion: 420, recommendedPortion: 350, reduction: 17, monthlySavings: 211000, confidence: 90, customerSatisfaction: 4.6 },
            { dish: 'Loup Grillé', currentPortion: 280, recommendedPortion: 240, reduction: 14, monthlySavings: 294000, confidence: 85, customerSatisfaction: 4.2 }
        ],

        // Menu engineering matrix
        menuEngineering: [
            { dish: 'Couscous Royal', profitability: 'high', popularity: 'high', category: 'Star', wasteImpact: 'high', action: 'Optimiser portion', priority: 'high' },
            { dish: 'Tajine Zitoune', profitability: 'high', popularity: 'high', category: 'Star', wasteImpact: 'medium', action: 'Maintenir', priority: 'medium' },
            { dish: 'Frites Maison', profitability: 'low', popularity: 'high', category: 'Plow Horse', wasteImpact: 'critical', action: 'Réduction urgente', priority: 'critical' },
            { dish: 'Loup Grillé', profitability: 'high', popularity: 'medium', category: 'Puzzle', wasteImpact: 'medium', action: 'Promouvoir', priority: 'medium' },
            { dish: 'Méchoui d\'Agneau', profitability: 'high', popularity: 'low', category: 'Puzzle', wasteImpact: 'high', action: 'Reformuler', priority: 'high' },
            { dish: 'Chorba Frik', profitability: 'low', popularity: 'high', category: 'Plow Horse', wasteImpact: 'medium', action: 'Réduire portion', priority: 'high' },
            { dish: 'Bourek Viande', profitability: 'medium', popularity: 'low', category: 'Dog', wasteImpact: 'low', action: 'Envisager retrait', priority: 'low' },
            { dish: 'Makroud', profitability: 'high', popularity: 'medium', category: 'Puzzle', wasteImpact: 'low', action: 'Promouvoir', priority: 'low' }
        ],

        // Waste by meal period. cost in DZD.
        wasteByMealPeriod: [
            { period: 'Petit-déjeuner', waste_kg: 245, cost: 188000, orders: 1240, wastePerOrder: 0.198 },
            { period: 'Déjeuner', waste_kg: 892, cost: 686000, orders: 3850, wastePerOrder: 0.232 },
            { period: 'Dîner', waste_kg: 1456, cost: 1259000, orders: 4250, wastePerOrder: 0.343 },
            { period: 'Tardif', waste_kg: 254, cost: 170000, orders: 860, wastePerOrder: 0.295 }
        ],

        // Waste trends by day of week. cost in DZD.
        wasteByDayOfWeek: [
            { day: 'Samedi', waste_kg: 512, cost: 423000, avgWasteRate: 23.8 },
            { day: 'Dimanche', waste_kg: 447, cost: 368000, avgWasteRate: 21.1 },
            { day: 'Lundi', waste_kg: 385, cost: 297000, avgWasteRate: 18.5 },
            { day: 'Mardi', waste_kg: 352, cost: 271000, avgWasteRate: 17.2 },
            { day: 'Mercredi', waste_kg: 368, cost: 284000, avgWasteRate: 17.8 },
            { day: 'Jeudi', waste_kg: 398, cost: 315000, avgWasteRate: 19.2 },
            { day: 'Vendredi', waste_kg: 485, cost: 393000, avgWasteRate: 22.4 }
        ]
    }
};

// Export for use in other modules
if (typeof module !== 'undefined' && module.exports) {
    module.exports = dashboardData;
}
