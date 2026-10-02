/* SolLingo para Nelly — app 100% estática. Sin CDNs, sin login, sin pagos. */
(function () {
  'use strict';

  /* ==================== Datos ==================== */
  var LESSONS = [
    {
      id: 'l1', num: '01',
      title: 'Mi día, a mi manera',
      desc: 'Mañanas, planes y conversaciones en casa',
      phrases: [
        ['Buenos días', 'Good morning', 1],
        ['Buenas tardes', 'Good afternoon', 1],
        ['Buenas noches', 'Good night', 1],
        ['Hola', 'Hello', 1],
        ['Adiós', 'Goodbye', 1],
        ['Gracias', 'Thank you', 1],
        ['Por favor', 'Please', 1],
        ['De nada', "You're welcome", 1],
        ['¿Dónde están mis llaves?', 'Where are my keys?', 2],
        ['Hoy trabajo desde casa', 'I work from home today', 2],
        ['Desayuno con mi familia', 'I have breakfast with my family', 2],
        ['Hoy es un día ocupado', 'Today is a busy day', 2],
        ['Preparo café por la mañana', 'I make coffee in the morning', 2],
        ['Riego las plantas', 'I water the plants', 2],
        ['Doblo la ropa limpia', 'I fold the clean laundry', 2],
        ['Antes de dormir leo un rato', 'Before sleeping I read for a while', 3],
        ['Mañana tengo una cita temprano', 'Tomorrow I have an early appointment', 3],
        ['¿Apagaste las luces de la cocina?', 'Did you turn off the kitchen lights?', 3],
        ['Después de cenar salimos a caminar', 'After dinner we go out for a walk', 3],
        ['El fin de semana dormimos hasta tarde', 'On weekends we sleep in late', 3],
        ['Buenos días, mi amor', 'Good morning, my love', 1],
        ['Hora de levantarse', 'Time to get up', 1],
        ['El café está listo', 'The coffee is ready', 1],
        ['Qué día tan bonito', 'What a beautiful day', 1],
        ['Vamos a desayunar', 'Let\'s have breakfast', 1],
        ['Lavo los platos', 'I wash the dishes', 1],
        ['Barro la cocina', 'I sweep the kitchen', 1],
        ['Trapeo el piso', 'I mop the floor', 1],
        ['Abre las ventanas', 'Open the windows', 2],
        ['La ropa ya se secó', 'The laundry is already dry', 2],
        ['Guardo la compra', 'I put away the groceries', 2],
        ['Pongo la mesa', 'I set the table', 2],
        ['Caliento la cena', 'I warm up dinner', 2],
        ['Saco la basura', 'I take out the trash', 2],
        ['Riego el jardín', 'I water the garden', 2],
        ['Hoy cocino algo especial', 'Today I\'m cooking something special', 3],
        ['¿Ya pagaste la luz?', 'Did you pay the electric bill?', 3],
        ['Mañana viene el técnico', 'The technician is coming tomorrow', 3],
        ['Deja las llaves en la mesa', 'Leave the keys on the table', 3],
        ['Apaga todo antes de salir', 'Turn everything off before leaving', 3],
        ['Cierra la puerta con llave', 'Lock the door', 1],
        ['Enciende la luz', 'Turn on the light', 1],
        ['Apaga la tele', 'Turn off the TV', 1],
        ['Baja el volumen', 'Turn down the volume', 1],
        ['Siéntate a comer', 'Sit down to eat', 1],
        ['Lávate las manos', 'Wash your hands', 1],
        ['Ponte cómoda', 'Make yourself comfortable', 1],
        ['Qué calor hace', 'It\'s so hot', 1],
        ['Hace frío afuera', 'It\'s cold outside', 2],
        ['Se fue la luz', 'The power went out', 2],
        ['Ya volvió la luz', 'The power is back', 2],
        ['Hay que comprar gas', 'We need to buy gas', 2],
        ['El agua está fría', 'The water is cold', 2],
        ['Pon la ropa en la lavadora', 'Put the clothes in the washer', 2],
        ['Tiende la ropa afuera', 'Hang the clothes outside', 2],
        ['La cena está en el horno', 'Dinner\'s in the oven', 3],
        ['¿Viste mis lentes?', 'Have you seen my glasses?', 3],
        ['El perro necesita salir', 'The dog needs to go out', 3],
        ['Mañana hay que madrugar', 'We have to get up early tomorrow', 3],
        ['Deja todo recogido', 'Leave everything tidy', 3],
      ]
    },
    {
      id: 'l2', num: '02',
      title: 'Recados sin miedo',
      desc: 'Tiendas, transporte, pagos y paquetes',
      phrases: [
        ['¿Cuánto?', 'How much?', 1],
        ['Gracias', 'Thank you', 1],
        ['Por favor', 'Please', 1],
        ['Sí', 'Yes', 1],
        ['No', 'No', 1],
        ['Hola', 'Hello', 1],
        ['Perdón', 'Sorry', 1],
        ['Adiós', 'Goodbye', 1],
        ['¿Aceptan tarjeta?', 'Do you take card?', 2],
        ['Necesito una bolsa, por favor', 'I need a bag, please', 2],
        ['¿Dónde queda la farmacia?', 'Where is the pharmacy?', 2],
        ['Un boleto de ida, por favor', 'A one-way ticket, please', 2],
        ['¿Dónde está el baño?', 'Where is the bathroom?', 2],
        ['Busco la parada del autobús', 'I am looking for the bus stop', 2],
        ['¿Me puede dar un recibo?', 'Can I have a receipt?', 2],
        ['¿A qué hora sale el autobús?', 'What time does the bus leave?', 3],
        ['El paquete llegó ayer', 'The package arrived yesterday', 3],
        ['¿Cuánto cuesta el envío a domicilio?', 'How much is home delivery?', 3],
        ['Ayer compré los regalos de Navidad', 'Yesterday I bought the Christmas gifts', 3],
        ['¿Me puede mostrar algo más barato?', 'Can you show me something cheaper?', 3],
        ['Disculpe', 'Excuse me', 1],
        ['La parada', 'The stop', 1],
        ['El boleto', 'The ticket', 1],
        ['Abierto', 'Open', 1],
        ['Cerrado', 'Closed', 1],
        ['La fila', 'The line', 1],
        ['Mi turno', 'My turn', 1],
        ['Efectivo', 'Cash', 1],
        ['¿Dónde pago?', 'Where do I pay?', 2],
        ['Necesito cambio', 'I need change', 2],
        ['¿A qué hora abren?', 'What time do you open?', 2],
        ['¿Tienen WiFi gratis?', 'Do you have free WiFi?', 2],
        ['Busco esta dirección', 'I\'m looking for this address', 2],
        ['¿Me lleva al centro?', 'Can you take me downtown?', 2],
        ['¿Cuánto es en total?', 'How much is the total?', 2],
        ['Perdí mi cartera ayer', 'I lost my wallet yesterday', 3],
        ['¿Dónde reclamo mi paquete?', 'Where do I claim my package?', 3],
        ['El autobús viene con retraso', 'The bus is running late', 3],
        ['Necesito un comprobante de pago', 'I need a payment receipt', 3],
        ['¿Me puede esperar un momento?', 'Can you wait a moment for me?', 3],
        ['La esquina', 'The corner', 1],
        ['El semáforo', 'The traffic light', 1],
        ['La acera', 'The sidewalk', 1],
        ['El puente', 'The bridge', 1],
        ['La tienda', 'The store', 1],
        ['El banco', 'The bank', 1],
        ['El correo', 'The post office', 1],
        ['La iglesia', 'The church', 1],
        ['¿Dónde hay un cajero?', 'Where is an ATM?', 2],
        ['El banco cierra a las cinco', 'The bank closes at five', 2],
        ['Necesito enviar este paquete', 'I need to mail this package', 2],
        ['¿Cuánto tarda en llegar?', 'How long does it take to arrive?', 2],
        ['La farmacia está al lado', 'The pharmacy is next door', 2],
        ['¿Pasa por aquí el autobús?', 'Does the bus pass by here?', 2],
        ['Me bajo en la próxima', 'I\'ll get off at the next one', 2],
        ['Olvidé mi identificación en casa', 'I forgot my ID at home', 3],
        ['¿Me puede dar un comprobante?', 'Can you give me a receipt?', 3],
        ['Hay mucha fila hoy', 'There\'s a long line today', 3],
        ['Vuelvo mañana más temprano', 'I\'ll come back earlier tomorrow', 3],
        ['¿Tienen servicio a domicilio?', 'Do you offer home delivery?', 3],
      ]
    },
    {
      id: 'l3', num: '03',
      title: 'Gente que quiero',
      desc: 'Familia y amigos',
      phrases: [
        ['Mamá', 'Mom', 1],
        ['Papá', 'Dad', 1],
        ['Hija', 'Daughter', 1],
        ['Hijo', 'Son', 1],
        ['Familia', 'Family', 1],
        ['Amiga', 'Friend', 1],
        ['Te quiero', 'I love you', 1],
        ['Hola, familia', 'Hello, family', 1],
        ['Mi esposo me ayuda mucho', 'My husband helps me a lot', 2],
        ['Hablamos todos los días', 'We talk every day', 2],
        ['Vamos a visitar a la familia', 'We are going to visit family', 2],
        ['Mi hija me llama cada noche', 'My daughter calls me every night', 2],
        ['Cenamos juntos los domingos', 'We have dinner together on Sundays', 2],
        ['Mi amiga vive cerca de aquí', 'My friend lives near here', 2],
        ['Nos ayudamos en todo', 'We help each other with everything', 2],
        ['Mi hermana viene el domingo que viene', 'My sister is coming next Sunday', 3],
        ['Hace años que nos conocemos', 'We have known each other for years', 3],
        ['¿Te acuerdas de nuestra vecina?', 'Do you remember our neighbor?', 3],
        ['Mis hijos ya están grandes', 'My children are all grown up', 3],
        ['La quiero como a una hermana', 'I love her like a sister', 3],
        ['Abuela', 'Grandmother', 1],
        ['Abuelo', 'Grandfather', 1],
        ['Tía', 'Aunt', 1],
        ['Tío', 'Uncle', 1],
        ['Prima', 'Cousin', 1],
        ['Bebé', 'Baby', 1],
        ['Esposo', 'Husband', 1],
        ['Esposa', 'Wife', 1],
        ['Los quiero mucho', 'I love you all so much', 2],
        ['Mi mamá cocina riquísimo', 'My mom cooks delicious food', 2],
        ['Hablé con mi hermana hoy', 'I talked to my sister today', 2],
        ['Mis hijos me visitan los fines de semana', 'My children visit me on weekends', 2],
        ['Estamos orgullosos de ti', 'We are proud of you', 2],
        ['La familia es lo primero', 'Family comes first', 2],
        ['Cuídate mucho, hijo', 'Take good care of yourself, son', 2],
        ['Nos reunimos en Navidad', 'We get together at Christmas', 3],
        ['Mi nieta nació en mayo', 'My granddaughter was born in May', 3],
        ['Llevamos veinte años casados', 'We\'ve been married for twenty years', 3],
        ['Toda la familia viene a cenar', 'The whole family is coming for dinner', 3],
        ['Siempre puedes contar conmigo', 'You can always count on me', 3],
        ['Nieto', 'Grandson', 1],
        ['Nieta', 'Granddaughter', 1],
        ['Sobrino', 'Nephew', 1],
        ['Sobrina', 'Niece', 1],
        ['Suegra', 'Mother-in-law', 1],
        ['Suegro', 'Father-in-law', 1],
        ['Cuñada', 'Sister-in-law', 1],
        ['Cuñado', 'Brother-in-law', 1],
        ['Mi papá está jubilado', 'My dad is retired', 2],
        ['Mi mamá me enseñó a cocinar', 'My mom taught me to cook', 2],
        ['Nos parecemos mucho', 'We look a lot alike', 2],
        ['Ella es la menor', 'She\'s the youngest', 2],
        ['Él es el mayor', 'He\'s the oldest', 2],
        ['Somos cinco hermanos', 'There are five of us siblings', 2],
        ['Mi familia vive lejos', 'My family lives far away', 2],
        ['Nos escribimos todas las semanas', 'We write to each other every week', 3],
        ['En mi casa siempre hay lugar para ti', 'There\'s always room for you in my home', 3],
        ['Los domingos son sagrados', 'Sundays are sacred', 3],
        ['Mi abuela cumple noventa años', 'My grandmother is turning ninety', 3],
        ['La boda será en junio', 'The wedding will be in June', 3],
      ]
    },
    {
      id: 'l4', num: '04',
      title: 'Salgo y disfruto',
      desc: 'Salidas y restaurante',
      phrases: [
        ['Salud', 'Cheers', 1],
        ['Gracias', 'Thank you', 1],
        ['Por favor', 'Please', 1],
        ['Qué rico', 'How tasty', 1],
        ['Agua', 'Water', 1],
        ['La cuenta', 'The check', 1],
        ['Adiós', 'Goodbye', 1],
        ['Hasta luego', 'See you later', 1],
        ['Una mesa para dos, por favor', 'A table for two, please', 2],
        ['Estaba delicioso', 'It was delicious', 2],
        ['¿Qué me recomienda?', 'What do you recommend?', 2],
        ['Vamos a dar un paseo', "Let's go for a walk", 2],
        ['Qué bonito atardecer', 'What a beautiful sunset', 2],
        ['¿Tienen mesa afuera?', 'Do you have a table outside?', 2],
        ['Hoy invito yo', 'Today it is my treat', 2],
        ['¿Nos puede tomar una foto, por favor?', 'Can you take our picture, please?', 3],
        ['El servicio estuvo excelente', 'The service was excellent', 3],
        ['Reservé para las siete de la noche', 'I booked a table for seven at night', 3],
        ['¿Aceptan reservaciones en línea?', 'Do you take online reservations?', 3],
        ['La próxima vez probamos el postre', 'Next time we will try the dessert', 3],
        ['Brindemos', 'Let\'s toast', 1],
        ['Postre', 'Dessert', 1],
        ['Menú', 'Menu', 1],
        ['Sopa', 'Soup', 1],
        ['Ensalada', 'Salad', 1],
        ['Jugo', 'Juice', 1],
        ['Café', 'Coffee', 1],
        ['Vino', 'Wine', 1],
        ['¿Qué van a tomar?', 'What will you have to drink?', 2],
        ['La comida llegó rápido', 'The food arrived quickly', 2],
        ['Este lugar me encanta', 'I love this place', 2],
        ['¿Tienen música en vivo?', 'Do you have live music?', 2],
        ['Quiero sentarme junto a la ventana', 'I want to sit by the window', 2],
        ['Tráigame otro café, por favor', 'Bring me another coffee, please', 2],
        ['Vamos al cine después', 'Let\'s go to the movies after', 2],
        ['Celebramos nuestro aniversario', 'We\'re celebrating our anniversary', 3],
        ['¿Tienen opciones vegetarianas?', 'Do you have vegetarian options?', 3],
        ['El cumpleañero invita el pastel', 'The birthday person treats us to cake', 3],
        ['Qué noche tan agradable', 'What a pleasant evening', 3],
        ['Volveremos muy pronto', 'We will be back very soon', 3],
        ['Tengo hambre', 'I\'m hungry', 1],
        ['Tengo sed', 'I\'m thirsty', 1],
        ['La mesa', 'The table', 1],
        ['La silla', 'The chair', 1],
        ['El plato', 'The plate', 1],
        ['El vaso', 'The glass', 1],
        ['El tenedor', 'The fork', 1],
        ['La cuchara', 'The spoon', 1],
        ['¿Tienen postre del día?', 'Do you have a dessert of the day?', 2],
        ['Sin picante, por favor', 'Not spicy, please', 2],
        ['La carne está en su punto', 'The meat is perfectly cooked', 2],
        ['¿Me trae la carta?', 'Can you bring me the menu?', 2],
        ['Compartimos el postre', 'We\'ll share the dessert', 2],
        ['Pida lo que quiera', 'Order whatever you like', 2],
        ['El café está muy bueno', 'The coffee is very good', 2],
        ['¿Tienen terraza?', 'Do you have a terrace?', 3],
        ['Hay que reservar con tiempo', 'You have to book in advance', 3],
        ['Nos atendieron de maravilla', 'They served us wonderfully', 3],
        ['Este sitio lo recomendó mi hija', 'My daughter recommended this place', 3],
        ['La pasamos increíble', 'We had an amazing time', 3],
      ]
    },
    {
      id: 'l5', num: '05',
      title: 'De compras',
      desc: 'En la tienda',
      phrases: [
        ['¿Cuánto?', 'How much?', 1],
        ['Gracias', 'Thank you', 1],
        ['No, gracias', 'No, thank you', 1],
        ['Sí, por favor', 'Yes, please', 1],
        ['Me gusta', 'I like it', 1],
        ['Muy bonito', 'Very pretty', 1],
        ['Adiós', 'Goodbye', 1],
        ['Perfecto', 'Perfect', 1],
        ['¿Tienen una talla más grande?', 'Do you have a bigger size?', 2],
        ['Solo estoy mirando, gracias', "I'm just looking, thanks", 2],
        ['¿Dónde está la caja?', 'Where is the checkout?', 2],
        ['¿Tienen descuento hoy?', 'Do you have a discount today?', 2],
        ['Busco un regalo para mi hija', "I'm looking for a gift for my daughter", 2],
        ['¿Tienen otro color?', 'Do you have another color?', 2],
        ['¿Dónde están los probadores?', 'Where are the fitting rooms?', 2],
        ['¿Este producto tiene garantía?', 'Does this product come with a warranty?', 3],
        ['¿Puedo devolverlo si no me queda?', 'Can I return it if it does not fit?', 3],
        ['Estoy buscando algo para el invierno', 'I am looking for something for winter', 3],
        ['¿Hacen envíos a domicilio?', 'Do you deliver to homes?', 3],
        ['Me lo recomendó una amiga', 'A friend recommended it to me', 3],
        ['Oferta', 'Sale', 1],
        ['Precio', 'Price', 1],
        ['Talla', 'Size', 1],
        ['Zapato', 'Shoe', 1],
        ['Camisa', 'Shirt', 1],
        ['Pantalón', 'Pants', 1],
        ['Vestido', 'Dress', 1],
        ['Bolsa', 'Bag', 1],
        ['¿Tienen mi talla?', 'Do you have my size?', 2],
        ['¿Puedo probármelo?', 'Can I try it on?', 2],
        ['Está muy caro', 'It\'s too expensive', 2],
        ['¿Tienen más en existencia?', 'Do you have more in stock?', 2],
        ['Busco zapatos cómodos', 'I\'m looking for comfortable shoes', 2],
        ['¿Aceptan devoluciones?', 'Do you accept returns?', 2],
        ['Me queda perfecto', 'It fits me perfectly', 2],
        ['¿Tienen sistema de apartado?', 'Do you have a layaway plan?', 3],
        ['Vine por el anuncio del periódico', 'I came because of the newspaper ad', 3],
        ['¿Me hace un descuento por pagar en efectivo?', 'Can you give me a cash discount?', 3],
        ['Necesito el ticket para la garantía', 'I need the receipt for the warranty', 3],
        ['¿A qué hora cierran los domingos?', 'What time do you close on Sundays?', 3],
        ['Zapatería', 'Shoe store', 1],
        ['Panadería', 'Bakery', 1],
        ['Carnicería', 'Butcher shop', 1],
        ['Verdulería', 'Produce store', 1],
        ['Librería', 'Bookstore', 1],
        ['Juguetería', 'Toy store', 1],
        ['Mercado', 'Market', 1],
        ['Kiosco', 'Kiosk', 1],
        ['¿Cuánto cuesta el kilo?', 'How much per kilo?', 2],
        ['Deme medio kilo', 'Give me half a kilo', 2],
        ['¿Está fresco?', 'Is it fresh?', 2],
        ['Llevo dos, por favor', 'I\'ll take two, please', 2],
        ['¿Tienen bolsa grande?', 'Do you have a big bag?', 2],
        ['Vuelvo la próxima semana', 'I\'ll be back next week', 2],
        ['Siempre compro aquí', 'I always shop here', 2],
        ['¿Me aparta este modelo?', 'Can you hold this model for me?', 3],
        ['Pago la mitad ahora', 'I\'ll pay half now', 3],
        ['¿Tienen garantía por escrito?', 'Do you have a written warranty?', 3],
        ['Vine a cambiar esto', 'I came to exchange this', 3],
        ['Perdí el ticket de compra', 'I lost the purchase receipt', 3],
      ]
    },
    {
      id: 'l6', num: '06',
      title: 'Cuídate mucho',
      desc: 'Salud y farmacia',
      phrases: [
        ['Ayuda', 'Help', 1],
        ['Doctor', 'Doctor', 1],
        ['Farmacia', 'Pharmacy', 1],
        ['Me duele', 'It hurts', 1],
        ['Gracias', 'Thank you', 1],
        ['Por favor', 'Please', 1],
        ['Estoy bien', "I'm OK", 1],
        ['Cita', 'Appointment', 1],
        ['Necesito una cita', 'I need an appointment', 2],
        ['Soy alérgica a este medicamento', "I'm allergic to this medicine", 2],
        ['¿Cada cuántas horas?', 'Every how many hours?', 2],
        ['Necesito ver a un doctor', 'I need to see a doctor', 2],
        ['¿Tienen algo para el dolor?', 'Do you have something for the pain?', 2],
        ['Necesito mis medicinas', 'I need my medicine', 2],
        ['Me siento mejor hoy', 'I feel better today', 2],
        ['Desde ayer me duele la espalda', 'My back has hurt since yesterday', 3],
        ['¿Necesito receta para esto?', 'Do I need a prescription for this?', 3],
        ['Soy diabética, ¿tiene azúcar?', 'I am diabetic, does it have sugar?', 3],
        ['¿Cuáles son los efectos secundarios?', 'What are the side effects?', 3],
        ['El doctor me dijo que descanse', 'The doctor told me to rest', 3],
        ['Dolor', 'Pain', 1],
        ['Fiebre', 'Fever', 1],
        ['Tos', 'Cough', 1],
        ['Pastilla', 'Pill', 1],
        ['Jarabe', 'Syrup', 1],
        ['Inyección', 'Shot', 1],
        ['Hospital', 'Hospital', 1],
        ['Emergencia', 'Emergency', 1],
        ['Me duele la cabeza', 'My head hurts', 2],
        ['Tengo gripe', 'I have the flu', 2],
        ['Necesito descansar', 'I need to rest', 2],
        ['¿Dónde queda urgencias?', 'Where is the emergency room?', 2],
        ['Tomo esto con comida', 'I take this with food', 2],
        ['¿Es contagioso?', 'Is it contagious?', 2],
        ['Me siento mareada', 'I feel dizzy', 2],
        ['Tengo cita con el especialista', 'I have an appointment with the specialist', 3],
        ['¿Cuándo me dan los resultados?', 'When will I get the results?', 3],
        ['Necesito renovar mi receta', 'I need to renew my prescription', 3],
        ['Me van a hacer análisis de sangre', 'They\'re going to do blood work on me', 3],
        ['El seguro cubre esta consulta', 'Insurance covers this visit', 3],
        ['Mareo', 'Dizziness', 1],
        ['Náusea', 'Nausea', 1],
        ['Alergia', 'Allergy', 1],
        ['Resfriado', 'Cold', 1],
        ['Curita', 'Bandage', 1],
        ['Termómetro', 'Thermometer', 1],
        ['Vitamina', 'Vitamin', 1],
        ['Dieta', 'Diet', 1],
        ['Me duele el estómago', 'My stomach hurts', 2],
        ['Tengo la presión alta', 'I have high blood pressure', 2],
        ['¿Esto da sueño?', 'Does this make you sleepy?', 2],
        ['Necesito algo para la tos', 'I need something for the cough', 2],
        ['¿A qué hora tomo esto?', 'What time do I take this?', 2],
        ['Camino todos los días', 'I walk every day', 2],
        ['Tomo mucha agua', 'I drink a lot of water', 2],
        ['El tratamiento dura un mes', 'The treatment lasts a month', 3],
        ['¿Puedo tomar esto embarazada?', 'Can I take this while pregnant?', 3],
        ['Me mandaron reposo absoluto', 'They ordered me complete rest', 3],
        ['La cita es en ayunas', 'The appointment requires fasting', 3],
        ['Lleve su tarjeta del seguro', 'Bring your insurance card', 3],
      ]
    },
    {
      id: 'l7', num: '07',
      title: 'Buen viaje',
      desc: 'Viajes',
      phrases: [
        ['Hola', 'Hello', 1],
        ['Gracias', 'Thank you', 1],
        ['Por favor', 'Please', 1],
        ['Taxi', 'Taxi', 1],
        ['Hotel', 'Hotel', 1],
        ['Aeropuerto', 'Airport', 1],
        ['Adiós', 'Goodbye', 1],
        ['¿Dónde?', 'Where?', 1],
        ['¿Dónde está la salida?', 'Where is the exit?', 2],
        ['Mi vuelo se retrasó', 'My flight is delayed', 2],
        ['¿A qué hora es el desayuno?', 'What time is breakfast?', 2],
        ['La habitación no está lista', 'The room is not ready', 2],
        ['Una noche más, por favor', 'One more night, please', 2],
        ['¿Dónde recojo mi equipaje?', 'Where do I pick up my luggage?', 2],
        ['Perdí mi conexión', 'I missed my connection', 2],
        ['¿A qué hora sale el próximo tren?', 'What time does the next train leave?', 3],
        ['La reserva está a mi nombre', 'The reservation is under my name', 3],
        ['¿La tarifa incluye el desayuno?', 'Does the rate include breakfast?', 3],
        ['Quisiera cambiar mi asiento', 'I would like to change my seat', 3],
        ['El vuelo dura tres horas', 'The flight lasts three hours', 3],
        ['Maleta', 'Suitcase', 1],
        ['Pasaporte', 'Passport', 1],
        ['Boleto', 'Ticket', 1],
        ['Salida', 'Departure', 1],
        ['Llegada', 'Arrival', 1],
        ['Puerta', 'Gate', 1],
        ['Retraso', 'Delay', 1],
        ['Mapa', 'Map', 1],
        ['¿Dónde está mi puerta de embarque?', 'Where is my boarding gate?', 2],
        ['Necesito un taxi al hotel', 'I need a taxi to the hotel', 2],
        ['¿Tienen habitaciones disponibles?', 'Do you have rooms available?', 2],
        ['Mi maleta no apareció', 'My suitcase didn\'t show up', 2],
        ['¿A qué hora sale el tour?', 'What time does the tour leave?', 2],
        ['Quiero una habitación tranquila', 'I want a quiet room', 2],
        ['¿Dónde puedo cambiar dinero?', 'Where can I exchange money?', 2],
        ['El vuelo se canceló por el clima', 'The flight was canceled due to weather', 3],
        ['Necesito asistencia en el aeropuerto', 'I need assistance at the airport', 3],
        ['¿El hotel tiene transporte al aeropuerto?', 'Does the hotel have airport shuttle?', 3],
        ['Viajamos en familia cada verano', 'We travel as a family every summer', 3],
        ['Guarde mi pasaporte en la caja fuerte', 'Keep my passport in the safe', 3],
        ['Viaje', 'Trip', 1],
        ['Playa', 'Beach', 1],
        ['Montaña', 'Mountain', 1],
        ['Ciudad', 'City', 1],
        ['Pueblo', 'Town', 1],
        ['Río', 'River', 1],
        ['Lago', 'Lake', 1],
        ['Isla', 'Island', 1],
        ['¿Hay playa cerca?', 'Is there a beach nearby?', 2],
        ['El hotel queda lejos', 'The hotel is far away', 2],
        ['¿Cuánto cuesta el tour?', 'How much is the tour?', 2],
        ['Quiero ver la ciudad', 'I want to see the city', 2],
        ['Tomemos muchas fotos', 'Let\'s take lots of photos', 2],
        ['El viaje fue hermoso', 'The trip was beautiful', 2],
        ['Extraño mi casa', 'I miss my home', 2],
        ['Hay que llegar tres horas antes', 'You have to arrive three hours early', 3],
        ['No olvides el cargador', 'Don\'t forget the charger', 3],
        ['El clima está perfecto', 'The weather is perfect', 3],
        ['Compramos los recuerdos ayer', 'We bought the souvenirs yesterday', 3],
        ['El próximo año volvemos', 'We\'ll come back next year', 3],
      ]
    },
    {
      id: 'l8', num: '08',
      title: 'Vecinos y amigos',
      desc: 'Vida social',
      phrases: [
        ['Hola, vecino', 'Hello, neighbor', 1],
        ['Gracias', 'Thank you', 1],
        ['Por favor', 'Please', 1],
        ['Con permiso', 'Excuse me', 1],
        ['Bienvenido', 'Welcome', 1],
        ['Hasta mañana', 'See you tomorrow', 1],
        ['Adiós', 'Goodbye', 1],
        ['Buenas noches', 'Good night', 1],
        ['¿Me puede ayudar, por favor?', 'Can you help me, please?', 2],
        ['¿Viene mañana a cenar?', 'Are you coming for dinner tomorrow?', 2],
        ['Muchas gracias por todo', 'Thank you so much for everything', 2],
        ['¿Le gusta el café?', 'Would you like some coffee?', 2],
        ['Mi casa es su casa', 'My home is your home', 2],
        ['Cuénteme, ¿cómo está?', 'Tell me, how are you?', 2],
        ['La fiesta estuvo linda', 'The party was lovely', 2],
        ['¿Le importa si pongo música?', 'Do you mind if I play music?', 3],
        ['Hace tiempo que no nos veíamos', 'It has been a long time', 3],
        ['Gracias por venir desde tan lejos', 'Thanks for coming from so far', 3],
        ['La próxima reunión es en mi casa', 'The next get-together is at my house', 3],
        ['Me alegra que se hayan conocido', 'I am glad you two met', 3],
        ['Vecina', 'Neighbor', 1],
        ['Amigo', 'Friend', 1],
        ['Fiesta', 'Party', 1],
        ['Regalo', 'Gift', 1],
        ['Visita', 'Visit', 1],
        ['Cena', 'Dinner', 1],
        ['Jardín', 'Garden', 1],
        ['Perro', 'Dog', 1],
        ['Pasa cuando quieras', 'Come by anytime', 2],
        ['¿Cómo está su familia?', 'How is your family?', 2],
        ['Nos vemos en la iglesia', 'See you at church', 2],
        ['Gracias por el postre', 'Thanks for the dessert', 2],
        ['¿Me presta su escalera?', 'Can I borrow your ladder?', 2],
        ['Los niños juegan juntos', 'The kids play together', 2],
        ['Qué bonitas flores', 'What beautiful flowers', 2],
        ['Organizamos una parrillada el sábado', 'We\'re having a cookout on Saturday', 3],
        ['Avíseme si necesita algo', 'Let me know if you need anything', 3],
        ['Su hijo es muy educado', 'Your son is very polite', 3],
        ['Nos turnamos para cuidar el jardín', 'We take turns caring for the garden', 3],
        ['Bienvenidos al vecindario', 'Welcome to the neighborhood', 3],
        ['Vecindario', 'Neighborhood', 1],
        ['Calle', 'Street', 1],
        ['Parque', 'Park', 1],
        ['Escuela', 'School', 1],
        ['Tienda', 'Store', 1],
        ['Carro', 'Car', 1],
        ['Bicicleta', 'Bicycle', 1],
        ['Mascota', 'Pet', 1],
        ['¿Cómo están los niños?', 'How are the kids?', 2],
        ['Su jardín está hermoso', 'Your garden is beautiful', 2],
        ['¿Va a la reunión?', 'Are you going to the meeting?', 2],
        ['Cuente conmigo', 'Count on me', 2],
        ['Fue un gusto verla', 'It was nice to see you', 2],
        ['Salúdeme a su esposo', 'Say hello to your husband for me', 2],
        ['Nos vemos pronto', 'See you soon', 2],
        ['La comunidad organiza una colecta', 'The community is organizing a fundraiser', 3],
        ['Hay junta de vecinos el viernes', 'There\'s a neighbors\' meeting on Friday', 3],
        ['Entre todos cuidamos la cuadra', 'Together we look after the block', 3],
        ['Su amistad vale oro', 'Your friendship is worth gold', 3],
        ['Aquí todos nos conocemos', 'Here we all know each other', 3],
      ]
    },
  ];


  var PRAISE = [
    '¡Excelente, {N}!',
    '¡Muy bien, {N}!',
    '¡Increíble! ¡Sigue así!',
    '¡Vas muy bien, {N}!',
    '¡Qué orgullo, {N}!',
    '¡Perfecto, {N}!'
  ];

  var COMFORT = [
    'Casi, casi... ¡tú puedes, {N}!',
    'No pasa nada, inténtalo otra vez',
    'Vas bien, fíjate otra vez'
  ];

  var WIN_PHRASE = '¡Felicidades, {N}! ¡Completaste la lección!';

  /* ==================== Utilidades ==================== */
  function shuffle(a) {
    a = a.slice();
    for (var i = a.length - 1; i > 0; i--) {
      var j = Math.floor(Math.random() * (i + 1));
      var t = a[i]; a[i] = a[j]; a[j] = t;
    }
    return a;
  }
  function rnd(n) { return Math.floor(Math.random() * n); }
  function choice(a) { return a[rnd(a.length)]; }
  function esc(s) {
    return String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
  }

  /* ==================== Persistencia (con try/catch) ==================== */
  var store = {
    get: function (k, d) {
      try {
        var v = localStorage.getItem(k);
        return v === null ? d : JSON.parse(v);
      } catch (e) { return d; }
    },
    set: function (k, v) {
      try { localStorage.setItem(k, JSON.stringify(v)); } catch (e) { /* la app sigue funcionando */ }
    }
  };
  var PROFILES = { nelly: 'Nelly', mirella: 'Mirella' };

  /* Migración: el avance antiguo (sin perfil) pasa a Nelly */
  (function migrateLegacy() {
    var nellyXp = null, nellyDone = null, oldXp = null, oldDone = null;
    try {
      nellyXp = localStorage.getItem('sollingo_nelly_xp');
      nellyDone = localStorage.getItem('sollingo_nelly_done');
      oldXp = localStorage.getItem('sollingo_xp');
      oldDone = localStorage.getItem('sollingo_done');
    } catch (e) { return; }
    try {
      var moved = false;
      if (nellyXp === null && oldXp !== null) { localStorage.setItem('sollingo_nelly_xp', oldXp); moved = true; }
      if (nellyDone === null && oldDone !== null) { localStorage.setItem('sollingo_nelly_done', oldDone); moved = true; }
      if (moved) {
        localStorage.removeItem('sollingo_xp');
        localStorage.removeItem('sollingo_done');
      }
    } catch (e) { /* la app sigue funcionando */ }
  })();

  var profile = store.get('sollingo_profile', null);
  if (!profile || !PROFILES[profile]) profile = null;
  function xpKey() { return 'sollingo_' + profile + '_xp'; }
  function doneKey() { return 'sollingo_' + profile + '_done'; }
  function doneTag(lesson) { return lesson.id + '#' + lesson.phrases.length; }
  function profName() { return PROFILES[profile] || 'Nelly'; }
  function tname(s) { return s.split('{N}').join(profName()); }

  var xp = profile ? store.get(xpKey(), 0) : 0;
  var doneIds = profile ? store.get(doneKey(), []) : [];
  var muted = store.get('sollingo_muted', false);

  /* ==================== Sonidos (Web Audio, sin archivos) ==================== */
  var actx = null;
  function ac() {
    try {
      if (!actx) {
        var AC = window.AudioContext || window.webkitAudioContext;
        actx = new AC();
      }
      if (actx.state === 'suspended') { actx.resume(); }
      return actx;
    } catch (e) { return null; }
  }
  function beep(freq, delay, dur, type, vol) {
    if (muted) return;
    var ctx = ac();
    if (!ctx) return;
    try {
      var t = ctx.currentTime + delay;
      var o = ctx.createOscillator();
      var g = ctx.createGain();
      o.type = type;
      o.frequency.setValueAtTime(freq, t);
      g.gain.setValueAtTime(0.0001, t);
      g.gain.exponentialRampToValueAtTime(vol, t + 0.03);
      g.gain.exponentialRampToValueAtTime(0.0001, t + dur);
      o.connect(g);
      g.connect(ctx.destination);
      o.start(t);
      o.stop(t + dur + 0.05);
    } catch (e) { /* silencio elegante */ }
  }
  function sfxCorrect() {
    var notes = [523.25, 659.25, 783.99, 1046.5];
    for (var i = 0; i < notes.length; i++) beep(notes[i], i * 0.09, 0.28, 'sine', 0.18);
  }
  function sfxWrong() {
    beep(196, 0, 0.30, 'sine', 0.12);
    beep(147, 0.14, 0.40, 'sine', 0.10);
  }
  function sfxFanfare() {
    var notes = [523.25, 523.25, 523.25, 659.25, 783.99, 1046.5];
    for (var i = 0; i < notes.length; i++) beep(notes[i], i * 0.13, 0.30, 'triangle', 0.16);
    beep(1318.5, notes.length * 0.13, 0.7, 'triangle', 0.16);
  }

  /* ==================== Voces ==================== */
  var voices = [];
  function loadVoices() {
    try { voices = window.speechSynthesis.getVoices() || []; }
    catch (e) { voices = []; }
  }
  if ('speechSynthesis' in window) {
    loadVoices();
    try { window.speechSynthesis.onvoiceschanged = loadVoices; } catch (e) {}
  }
  function pickVoice(langPrefix, prefer) {
    var best = null, bestScore = -1;
    for (var j = 0; j < voices.length; j++) {
      var l = (voices[j].lang || '').toLowerCase();
      if (l.indexOf(langPrefix) !== 0) continue;
      var name = (voices[j].name || '').toLowerCase();
      var s = 0;
      if (name.indexOf('google') >= 0) s += 4;
      if (name.indexOf('natural') >= 0 || name.indexOf('enhanced') >= 0 ||
          name.indexOf('premium') >= 0 || name.indexOf('neural') >= 0) s += 3;
      for (var p = 0; p < prefer.length; p++) {
        if (l.indexOf(prefer[p]) === 0) { s += 2; break; }
      }
      if (voices[j].localService === false) s += 1;
      if (s > bestScore) { bestScore = s; best = voices[j]; }
    }
    return best;
  }
  function speak(text, lang) {
    if (muted) return;
    try {
      if (!('speechSynthesis' in window)) return;
      var u = new SpeechSynthesisUtterance(text);
      if (lang === 'es') {
        var v = pickVoice('es', ['es-us', 'es-mx', 'es_419', 'es-es']);
        u.lang = v ? v.lang : 'es-ES';
        if (v) u.voice = v;
        u.rate = 0.95;
        u.pitch = 1;
      } else {
        var w = pickVoice('en', ['en-us']);
        u.lang = w ? w.lang : 'en-US';
        if (w) u.voice = w;
        u.rate = 0.9;
        u.pitch = 1;
      }
      u.volume = 1;
      window.speechSynthesis.cancel();
      setTimeout(function () {
        try { window.speechSynthesis.speak(u); } catch (e) {}
      }, 60);
    } catch (e) { /* sin voz, pero la app sigue */ }
  }
  /* Audios pregrabados con la voz de Sol; si el archivo falta, usa la voz del sistema */
  function playAudioFile(url, fallbackText, fallbackLang) {
    if (muted) return;
    var done = false;
    function fallback() {
      if (done) return;
      done = true;
      speak(fallbackText, fallbackLang);
    }
    try {
      var a = new Audio(url);
      a.onerror = fallback;
      var p = a.play();
      if (p && typeof p.catch === 'function') p.catch(fallback);
    } catch (e) { fallback(); }
  }
  function playPraise() {
    var i = rnd(PRAISE.length);
    playAudioFile('audio/es/praise-' + profile + '-' + i + '.mp3', tname(PRAISE[i]), 'es');
  }
  function playComfort() {
    var i = rnd(COMFORT.length);
    var url = i === 0 ? 'audio/es/comfort-' + profile + '-0.mp3' : 'audio/es/comfort-' + i + '.mp3';
    playAudioFile(url, tname(COMFORT[i]), 'es');
  }
  function playWin() {
    playAudioFile('audio/es/win-' + profile + '.mp3', tname(WIN_PHRASE), 'es');
  }
  function playEnglish(lessonId, phraseIdx, englishText) {
    playAudioFile('audio/en/' + lessonId + '-' + phraseIdx + '.mp3', englishText, 'en');
  }
  function stopSpeak() {
    try {
      if ('speechSynthesis' in window) window.speechSynthesis.cancel();
    } catch (e) {}
  }

  /* ==================== DOM ==================== */
  var $ = function (id) { return document.getElementById(id); };
  var xpVal = $('xpVal'), doneVal = $('doneVal'), doneTotal = $('doneTotal');
  var muteBtn = $('muteBtn'), profileBtn = $('profileBtn');
  var heroTitle = $('heroTitle'), winTitle = $('winTitle');
  var screenProfile = $('screen-profile'), screenHome = $('screen-home'), screenLesson = $('screen-lesson'), screenWin = $('screen-win');
  var lessonList = $('lessonList'), exerciseBox = $('exercise'), progressFill = $('progressFill');
  var feedback = $('feedback'), feedbackCard = $('feedbackCard');
  var feedbackTitle = $('feedbackTitle'), feedbackSub = $('feedbackSub');
  var levelBox = $('levelBox');

  function showScreen(name) {
    screenProfile.classList.toggle('hidden', name !== 'profile');
    screenHome.classList.toggle('hidden', name !== 'home');
    screenLesson.classList.toggle('hidden', name !== 'lesson');
    screenWin.classList.toggle('hidden', name !== 'win');
    window.scrollTo(0, 0);
  }

  function refreshHeader() {
    xpVal.textContent = xp;
    doneTotal.textContent = LESSONS.length;
    var n = 0;
    for (var i = 0; i < LESSONS.length; i++) {
      if (doneIds.indexOf(doneTag(LESSONS[i])) >= 0) n++;
    }
    doneVal.textContent = n;
    muteBtn.textContent = muted ? '🔇' : '🔊';
  }

  /* ==================== Inicio ==================== */
  function renderHome() {
    heroTitle.textContent = '¡Hoy vas a sorprenderte, ' + profName() + '!';
    var lvl = mirellaLevel();
    if (levelBox) {
      levelBox.classList.toggle('hidden', !lvl);
      if (lvl) {
        var lb = levelBox.querySelectorAll('.level-btn');
        for (var b = 0; b < lb.length; b++) {
          (function (btn) {
            var lv = parseInt(btn.getAttribute('data-level'), 10);
            btn.classList.toggle('active', lv === lvl);
            btn.onclick = function () {
              store.set('sollingo_mirella_level', lv);
              stopSpeak();
              renderHome();
            };
          })(lb[b]);
        }
      }
    }
    var html = '';
    for (var i = 0; i < LESSONS.length; i++) {
      var l = LESSONS[i];
      var isDone = doneIds.indexOf(doneTag(l)) >= 0;
      var nPhrases = phraseIdxs(l).length;
      html += '<button class="lesson-card" data-lesson="' + l.id + '">' +
        '<span class="lesson-num">' + l.num + '</span>' +
        '<span class="lesson-info"><h3>' + esc(l.title) + '</h3><p>' + esc(l.desc) + '</p>' +
        '<span class="lesson-count">' + nPhrases + ' frases' + (lvl ? ' · Nivel ' + LEVEL_NAMES[lvl] : '') + '</span>' +
        (isDone ? '<span class="lesson-done">✓ Completada</span>' : '') +
        '</span><span class="playbtn">▶</span></button>';
    }
    lessonList.innerHTML = html;
    var cards = lessonList.querySelectorAll('.lesson-card');
    for (var k = 0; k < cards.length; k++) {
      cards[k].addEventListener('click', function () {
        startLesson(this.getAttribute('data-lesson'));
      });
    }
  }

  /* ==================== Lección ==================== */
  var S = { lesson: null, exs: [], idx: 0, xpGain: 0, locked: false };

  function startLesson(id) {
    var lesson = null;
    for (var i = 0; i < LESSONS.length; i++) {
      if (LESSONS[i].id === id) lesson = LESSONS[i];
    }
    if (!lesson) return;
    S.lesson = lesson;
    S.idx = 0;
    S.xpGain = 0;
    S.locked = false;
    S.exs = buildExercises(lesson);
    showScreen('lesson');
    renderExercise();
  }

  /* Nivel de Mirella: 1=Fácil, 2=Medio, 3=Difícil. Nelly usa todas las frases. */
  var LEVEL_NAMES = { 1: 'Fácil', 2: 'Medio', 3: 'Difícil' };
  function mirellaLevel() {
    if (profile !== 'mirella') return 0;
    return store.get('sollingo_mirella_level', 1);
  }
  function phraseIdxs(lesson) {
    var lvl = mirellaLevel();
    var out = [];
    for (var i = 0; i < lesson.phrases.length; i++) {
      if (!lvl || lesson.phrases[i][2] === lvl) out.push(i);
    }
    return out;
  }

  function buildExercises(lesson) {
    var types = shuffle(['choose', 'listen', 'order', 'fill',
                         'choose', 'listen', 'order', 'fill',
                         'choose', 'listen', 'order', 'fill']);
    var idxs = phraseIdxs(lesson);
    var exs = [];
    var last = -1;
    for (var i = 0; i < types.length; i++) {
      var k;
      do { k = rnd(idxs.length); } while (k === last && idxs.length > 1);
      last = k;
      exs.push({ type: types[i], pi: idxs[k] });
    }
    return exs;
  }

  /* Frases de la lección actual como distractores (respetando el nivel, sin la actual) */
  function lessonPool(exceptPi) {
    var pool = [];
    var idxs = phraseIdxs(S.lesson);
    for (var i = 0; i < idxs.length; i++) {
      if (idxs[i] !== exceptPi) pool.push(S.lesson.phrases[idxs[i]]);
    }
    return pool;
  }

  /* Frases de las demás lecciones como distractores (respetando el nivel) */
  function otherPhrases() {
    var pool = [];
    for (var i = 0; i < LESSONS.length; i++) {
      if (LESSONS[i].id === S.lesson.id) continue;
      var idxs = phraseIdxs(LESSONS[i]);
      for (var j = 0; j < idxs.length; j++) pool.push(LESSONS[i].phrases[idxs[j]]);
    }
    return shuffle(pool);
  }

  function renderExercise() {
    S.locked = false;
    progressFill.style.width = Math.round((S.idx / S.exs.length) * 100) + '%';
    var ex = S.exs[S.idx];
    if (ex.type === 'choose') renderChoose(ex);
    else if (ex.type === 'listen') renderListen(ex);
    else if (ex.type === 'order') renderOrder(ex);
    else renderFill(ex);
  }

  /* ---- Tipo 1: elige la traducción ---- */
  function renderChoose(ex) {
    var ph = S.lesson.phrases[ex.pi];
    var dir = Math.random() < 0.5 ? 'es2en' : 'en2es';
    var q, correctAns, getOpt;
    if (dir === 'es2en') { q = ph[0]; correctAns = ph[1]; getOpt = function (p) { return p[1]; }; }
    else { q = ph[1]; correctAns = ph[0]; getOpt = function (p) { return p[0]; }; }

    var pool = shuffle(lessonPool(ex.pi).concat(otherPhrases()));

    var opts = [correctAns];
    for (var k = 0; k < pool.length && opts.length < 4; k++) {
      var cand = getOpt(pool[k]);
      if (opts.indexOf(cand) < 0) opts.push(cand);
    }
    opts = shuffle(opts);

    var html = '<div class="ex-label">Elige la traducción</div>' +
      '<div class="ex-prompt">' + esc(q) + '</div><div class="options">';
    for (var m = 0; m < opts.length; m++) {
      html += '<button class="option" data-val="' + esc(opts[m]) + '">' + esc(opts[m]) + '</button>';
    }
    exerciseBox.innerHTML = html + '</div>';

    var btns = exerciseBox.querySelectorAll('.option');
    for (var b = 0; b < btns.length; b++) {
      btns[b].addEventListener('click', function () {
        if (S.locked) return;
        var val = this.getAttribute('data-val');
        var ok = (val === correctAns);
        paintOptions(btns, correctAns);
        answer(ok, correctAns);
      });
    }
  }

  function paintOptions(btns, correctAns) {
    for (var i = 0; i < btns.length; i++) {
      btns[i].disabled = true;
      if (btns[i].getAttribute('data-val') === correctAns) btns[i].classList.add('correct');
    }
  }

  /* ---- Tipo 2: escucha y elige ---- */
  function renderListen(ex) {
    var ph = S.lesson.phrases[ex.pi];
    var pool = shuffle(lessonPool(ex.pi).concat(otherPhrases()));

    var opts = [ph[0]];
    for (var k = 0; k < pool.length && opts.length < 4; k++) {
      if (opts.indexOf(pool[k][0]) < 0) opts.push(pool[k][0]);
    }
    opts = shuffle(opts);

    var html = '<div class="ex-label">Escucha y elige</div>' +
      '<div class="listen-box"><button class="listen-play" id="replayBtn" aria-label="Escuchar de nuevo">🔊</button>' +
      '<p>Toca para escuchar la frase en inglés</p></div>' +
      '<div class="ex-hint">¿Qué significa?</div><div class="options">';
    for (var m = 0; m < opts.length; m++) {
      html += '<button class="option" data-val="' + esc(opts[m]) + '">' + esc(opts[m]) + '</button>';
    }
    exerciseBox.innerHTML = html + '</div>';

    var sayIt = function () { playEnglish(S.lesson.id, ex.pi, ph[1]); };
    $('replayBtn').addEventListener('click', sayIt);
    setTimeout(sayIt, 350);

    var btns = exerciseBox.querySelectorAll('.option');
    for (var b = 0; b < btns.length; b++) {
      btns[b].addEventListener('click', function () {
        if (S.locked) return;
        var val = this.getAttribute('data-val');
        var ok = (val === ph[0]);
        paintOptions(btns, ph[0]);
        answer(ok, ph[0]);
      });
    }
  }

  /* ---- Tipo 3: ordena las palabras ---- */
  function renderOrder(ex) {
    var ph = S.lesson.phrases[ex.pi];
    var words = ph[1].split(' ');
    var bank = shuffle(words);
    var tries = 0;
    while (tries < 20 && bank.join(' ') === ph[1]) { bank = shuffle(words); tries++; }

    var html = '<div class="ex-label">Ordena las palabras</div>' +
      '<div class="ex-hint">' + esc(ph[0]) + '</div>' +
      '<div class="answer-line" id="answerLine"><span class="empty">Toca las palabras en orden…</span></div>' +
      '<div class="word-bank" id="wordBank"></div>' +
      '<button class="btn primary" id="checkBtn">Comprobar</button>';
    exerciseBox.innerHTML = html;

    var bankEl = $('wordBank'), lineEl = $('answerLine');
    var placed = [];

    for (var i = 0; i < bank.length; i++) {
      (function (w) {
        var b = document.createElement('button');
        b.className = 'word';
        b.textContent = w;
        b.addEventListener('click', function () {
          if (S.locked || b.classList.contains('in-answer')) return;
          b.classList.add('in-answer');
          placed.push({ w: w, btn: b });
          drawLine();
        });
        bankEl.appendChild(b);
      })(bank[i]);
    }

    function drawLine() {
      lineEl.innerHTML = '';
      if (placed.length === 0) {
        lineEl.innerHTML = '<span class="empty">Toca las palabras en orden…</span>';
        return;
      }
      for (var i = 0; i < placed.length; i++) {
        (function (item) {
          var c = document.createElement('button');
          c.className = 'word in-answer';
          c.textContent = item.w;
          c.addEventListener('click', function () {
            if (S.locked) return;
            item.btn.classList.remove('in-answer');
            placed.splice(placed.indexOf(item), 1);
            drawLine();
          });
          lineEl.appendChild(c);
        })(placed[i]);
      }
    }

    $('checkBtn').addEventListener('click', function () {
      if (S.locked || placed.length !== words.length) return;
      var built = placed.map(function (p) { return p.w; }).join(' ');
      answer(built === ph[1], ph[1]);
    });
  }

  /* ---- Tipo 4: completa la frase ---- */
  function renderFill(ex) {
    var ph = S.lesson.phrases[ex.pi];
    var words = ph[1].split(' ');
    var candIdx = [];
    for (var i = 0; i < words.length; i++) {
      if (words[i].length >= 3) candIdx.push(i);
    }
    if (candIdx.length === 0) candIdx.push(0);
    var blankAt = choice(candIdx);
    var correctWord = words[blankAt];

    var shown = words.slice();
    shown[blankAt] = '_____';

    var poolWords = [];
    var seen = {};
    function addWords(list) {
      for (var i = 0; i < list.length; i++) {
        var ws = list[i][1].split(' ');
        for (var j = 0; j < ws.length; j++) {
          var w = ws[j];
          if (w.length >= 2 && w !== correctWord && !seen[w]) { seen[w] = 1; poolWords.push(w); }
        }
      }
    }
    addWords(lessonPool(ex.pi));
    for (var li = 0; li < LESSONS.length && poolWords.length < 12; li++) {
      if (LESSONS[li].id !== S.lesson.id) {
        var lidxs = phraseIdxs(LESSONS[li]);
        var llist = [];
        for (var q = 0; q < lidxs.length; q++) llist.push(LESSONS[li].phrases[lidxs[q]]);
        addWords(llist);
      }
    }
    poolWords = shuffle(poolWords);

    var opts = [correctWord];
    for (var k = 0; k < poolWords.length && opts.length < 4; k++) {
      if (opts.indexOf(poolWords[k]) < 0) opts.push(poolWords[k]);
    }
    opts = shuffle(opts);

    var html = '<div class="ex-label">Completa la frase</div>' +
      '<div class="ex-hint">' + esc(ph[0]) + '</div>' +
      '<div class="ex-prompt">' + esc(shown.join(' ')) + '</div><div class="options">';
    for (var m = 0; m < opts.length; m++) {
      html += '<button class="option" data-val="' + esc(opts[m]) + '">' + esc(opts[m]) + '</button>';
    }
    exerciseBox.innerHTML = html + '</div>';

    var btns = exerciseBox.querySelectorAll('.option');
    for (var b = 0; b < btns.length; b++) {
      btns[b].addEventListener('click', function () {
        if (S.locked) return;
        var val = this.getAttribute('data-val');
        var ok = (val === correctWord);
        paintOptions(btns, correctWord);
        answer(ok, correctWord);
      });
    }
  }

  /* ==================== Respuesta y feedback ==================== */
  function answer(ok, correctText) {
    if (S.locked) return;
    S.locked = true;
    if (ok) {
      S.xpGain += 10;
      xp += 10;
      store.set(xpKey(), xp);
      refreshHeader();
      sfxCorrect();
      playPraise();
      feedbackCard.className = 'feedback-card good';
      feedbackTitle.textContent = '¡Muy bien! 🎉';
      feedbackSub.textContent = '';
    } else {
      sfxWrong();
      playComfort();
      feedbackCard.className = 'feedback-card bad';
      feedbackTitle.textContent = 'Casi, casi…';
      feedbackSub.innerHTML = 'La respuesta correcta era: <strong>' + esc(correctText) + '</strong>';
    }
    feedback.classList.remove('hidden');
  }

  $('continueBtn').addEventListener('click', function () {
    feedback.classList.add('hidden');
    stopSpeak();
    S.idx++;
    if (S.idx >= S.exs.length) finishLesson();
    else renderExercise();
  });

  /* ==================== Fin de lección ==================== */
  function finishLesson() {
    if (doneIds.indexOf(doneTag(S.lesson)) < 0) {
      doneIds.push(doneTag(S.lesson));
      store.set(doneKey(), doneIds);
    }
    refreshHeader();
    winTitle.textContent = '¡Felicidades, ' + profName() + '!';
    $('winText').textContent = '¡Completaste la lección "' + S.lesson.title + '"!';
    $('winXp').textContent = '+' + S.xpGain + ' XP';
    showScreen('win');
    sfxFanfare();
    setTimeout(playWin, 900);
  }

  $('againBtn').addEventListener('click', function () { startLesson(S.lesson.id); });
  $('homeBtn').addEventListener('click', function () {
    stopSpeak();
    renderHome();
    refreshHeader();
    showScreen('home');
  });
  $('quitBtn').addEventListener('click', function () {
    stopSpeak();
    feedback.classList.add('hidden');
    renderHome();
    showScreen('home');
  });

  /* ==================== Perfiles ==================== */
  function setProfile(p) {
    if (!PROFILES[p]) return;
    profile = p;
    store.set('sollingo_profile', p);
    xp = store.get(xpKey(), 0);
    doneIds = store.get(doneKey(), []);
    renderHome();
    refreshHeader();
    showScreen('home');
  }

  function renderProfileScreen() {
    var cards = document.querySelectorAll('.profile-card');
    for (var i = 0; i < cards.length; i++) {
      cards[i].addEventListener('click', function () {
        setProfile(this.getAttribute('data-profile'));
      });
    }
  }

  profileBtn.addEventListener('click', function () {
    stopSpeak();
    feedback.classList.add('hidden');
    showScreen('profile');
  });

  /* ==================== Silenciar ==================== */
  muteBtn.addEventListener('click', function () {
    muted = !muted;
    store.set('sollingo_muted', muted);
    if (muted) stopSpeak();
    refreshHeader();
  });

  /* ==================== Aviso de contenido nuevo ==================== */
  var APP_VERSION = 5;
  function checkForUpdate() {
    try {
      fetch('version.json?x=' + Date.now(), { cache: 'no-store' }).then(function (r) {
        return r.json();
      }).then(function (v) {
        if (v && v.v > APP_VERSION && !document.getElementById('updBanner')) {
          var b = document.createElement('div');
          b.id = 'updBanner';
          b.innerHTML = '✨ Hay frases nuevas esperándote. Toca aquí para actualizar';
          b.style.cssText = 'position:fixed;top:0;left:0;right:0;z-index:9999;' +
            'background:#f5b301;color:#1a1a2e;text-align:center;padding:12px 16px;' +
            'font-weight:bold;font-size:16px;cursor:pointer;box-shadow:0 2px 8px rgba(0,0,0,.3);';
          b.addEventListener('click', function () {
            location.href = location.pathname + '?upd=' + Date.now();
          });
          document.body.appendChild(b);
        }
      }).catch(function () { /* sin red, sin aviso */ });
    } catch (e) { /* sin fetch, sin aviso */ }
  }

  /* ==================== Arranque ==================== */
  renderProfileScreen();
  if (profile) {
    renderHome();
    refreshHeader();
    showScreen('home');
  } else {
    refreshHeader();
    showScreen('profile');
  }
})();
