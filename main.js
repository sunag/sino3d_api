sino3d.load( 'master' );

// carregando showroom
sino3d.addEventListener('progress', ( e ) => {

	const percent = parseInt( e.value * 100 );

	console.log( 'PROGRESS', percent );
	
});

// carregando interior
sino3d.addEventListener('insideProgress', ( e ) => {

	const percent = parseInt( e.value * 100 );

	console.log( 'INSIDE PROGRESS', percent );
	
});

// hotspot
sino3d.addEventListener('hotspot', ( e ) => {

	const id = e.id;

	console.log( 'HOTSPOT ID:', id );
	
});

// showroom carregado
sino3d.addEventListener('complete', () => {

	sino3d.start();

	sino3d.setCarVersion( 'Master Furgão L1H1' );
	//sino3d.setCarVersion( 'Master Grand Furgão L2H2' );
	//sino3d.setCarVersion( 'Master Extra Furgão L3H2' );
	//sino3d.setCarVersion( 'Master Extra Vitré L3H2' );
	//sino3d.setCarVersion( 'Master Chassi Cabine L2H1' );
	//sino3d.setCarVersion( 'Master Minibus Executive L3H2' );

	sino3d.setCarColor( 0xC0C0C0 );
	
	console.log( 'DONE!' );

});

const goToExterior = () => {
	
	// fade para efeito de transição
	sino3d.fadeState({
		fadeOpacity: 1
	}, 1000, () => {
		
		// remove interior da memoria de video
		sino3d.removeInside();
		
		// muda para visão exterior
		sino3d.setView( 'outside' );
		
		// trasição da camera para o ângulo de origem
		sino3d.fadeCameraToInitialState();
		
		// trasição para a exposição padrão
		sino3d.fadeState({
			exposure: 1
		}, 1000 );
		
		console.log( 'DONE OUTSIDE!' );
		
	} );
	
}

const goToInterior = () => {
	
	// fade para efeito de transição
	sino3d.fadeState({
		exposure: 0
	}, 1000, () => {
		
		// carrega asset ( generico nesse momento )
		sino3d.openInside( 'master' );
		
		console.log( 'LOADING INSIDE' );
		
	} );

}

// interior carregado 
sino3d.addEventListener('insideEnd', () => {
	
	// reset camera do interior para o estado inicial
	sino3d.resetInsideCamera();
	
	// muda para visão interior
	sino3d.setView( 'inside' );
	
});

// precione 1 até 6 para alterar as versões
document.body.onkeydown = ( e ) => {

	const key = e.key.toLowerCase();
	
		 if ( key == 1 ) sino3d.setCarVersion( 'Master Furgão L1H1' );
	else if ( key == 2 ) sino3d.setCarVersion( 'Master Grand Furgão L2H2' );
	else if ( key == 3 ) sino3d.setCarVersion( 'Master Extra Furgão L3H2' );
	else if ( key == 4 ) sino3d.setCarVersion( 'Master Extra Vitré L3H2' );
	else if ( key == 5 ) sino3d.setCarVersion( 'Master Chassi Cabine L2H1' );
	else if ( key == 6 ) sino3d.setCarVersion( 'Master Minibus Executive L3H2' );
	
	else if ( key == 'i' ) goToInterior();
	else if ( key == 'e' ) goToExterior();
	
	else if ( key == 'a' ) sino3d.setAmbient( 'chassi.jpg' );
	else if ( key == 'b' ) sino3d.setAmbient( 'minibus-vitre.jpg' );
	else if ( key == 'd' ) sino3d.setAmbient(); // default
	
	else if ( key == 'h' ) sino3d.hotspots = !sino3d.hotspots;
	
	else if ( key == '-' ) sino3d.setScale( 1, .5 );
	else if ( key == '+' ) sino3d.setScale( 1, 1 );
	
	else if ( key == 8 ) sino3d.setGhost( 'Master Furgão L1H1');
	else if ( key == 9 ) sino3d.setGhost( 'Master Grand Furgão L2H2' );
	else if ( key == 0 ) sino3d.setGhost(); // default

}