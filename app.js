fetch("https://api.sheety.co/30b6e400-9023-4a15-8e6c-16aa4e3b1e72")
	.then((response) => {
		// Salvar e retornar resposta da requisição como Json
		return response.json();
	})
	.then((data) => {
		// Utilizar cada item presente da resposta
		data.forEach((room) => {
			// Elemento principal
			var rooms = document.getElementById("rooms");
			console.log(data)
			// Nova div representando um quarto
			var div = document.createElement("div");
			// Definir classe da div
			div.className = "item";

			// Texto que vai ser inserido na div do quarto
			var p = document.createElement("p");
			// Inserir texto no elemento p
			p.innerHTML = room.name;

			// Texto que vai ser inserido na div do quarto
			var price = document.createElement("p");
			// Inserir texto no elemento p
			price.innerHTML = `<b>R$ ${room.price},00 /noite </b>`;

			var img = document.createElement("img");
			img.src = room.photo;
			img.setAttribute("width", "304");
			img.setAttribute("height", "228");

			var tipo = document.createElement("p")
			tipo.innerHTML = `Tipo - ${room.property_type}` ;
			


			// Inserir texto na div
			
			div.appendChild(img);
			div.appendChild(tipo);
			div.appendChild(p);
			div.appendChild(price);

			// Inserir div no elemento principal
			rooms.appendChild(div);
		});
	});

	



