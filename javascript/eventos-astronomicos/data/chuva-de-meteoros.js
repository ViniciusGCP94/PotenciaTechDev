const colecaoChuvasDeMeteoros = [
    { nome: 'Alfa Centaurídeos',	        inicio: '28/01', fim: '21/02', pico: 'Fev 8',   ascencao: 210,  declinacao:	-59,  velocidade:	56, thz: '6',        intensidade: 'Média'},
    { nome: 'Gama Normídeos',	            inicio: '25/02', fim: '22/03', pico: 'Mar 14',  ascencao: 239,  declinacao:	-50,  velocidade:	56, thz: '6',        intensidade: 'Média'},
    { nome: 'Pi Pupídeos',	                inicio: '15/04', fim: '28/04', pico: 'Abr 23',  ascencao: 110,  declinacao:	-45,  velocidade:	18, thz: 'Variável', intensidade: 'Irregular'},
    { nome: 'Líridas',	                    inicio: '16/04', fim: '25/04', pico: 'Abr 22',  ascencao: 271,  declinacao:	34,  velocidade:	49, thz: '18',       intensidade: 'Forte com meteoros rápidos e persistentes'},
    { nome: 'Eta Aquáridas',	            inicio: '19/04', fim: '28/05', pico: 'Mai 5',   ascencao: 338,  declinacao:	-1,  velocidade:	66, thz: '65',       intensidade: 'Forte com meteoros muito rápidos e de grande comprimento'},
    { nome: 'Eta Líridas',	                inicio: '05/03', fim: '14/05', pico: 'Mai 8',   ascencao: 287,  declinacao:	44,  velocidade:	43, thz: '3',        intensidade: 'Fraca'},
    { nome: 'Bootídeos de Junho',	        inicio: '28/06', fim: '28/06', pico: 'Jun 28',  ascencao: 224,  declinacao:	48,  velocidade:	18, thz: 'Variável', intensidade: 'Irregular'},
    { nome: 'Alfa Capricornídeos',          inicio: '03/07', fim: '15/08', pico: 'Jul 30',  ascencao: 307,  declinacao:	-10,  velocidade:	23, thz: '5',        intensidade: 'Fraca'},
    { nome: 'Delta Aquáridas do Sul',       inicio: '12/07', fim: '19/08', pico: 'Jul 28',  ascencao: 340,  declinacao:	-16,  velocidade:	41, thz: '16',       intensidade: 'Forte com meteoros lentos e rasto comprido'},
    { nome: 'Piscis Austrinídeos',	        inicio: '15/07', fim: '10/08', pico: 'Jul 28',  ascencao: 341,  declinacao:	-30,  velocidade:	35, thz: '5',        intensidade: 'Média'},
    { nome: 'Perseidas',	                inicio: '17/07', fim: '24/08', pico: 'Ago 12',  ascencao: 48,   declinacao:	58,  velocidade:	59, thz: '100',      intensidade: 'Forte e muito rápidas'},
    { nome: 'Capa Cignídeos',               inicio: '03/08', fim: '25/08', pico: 'Ago 17',  ascencao: 286,  declinacao:	59,  velocidade:	25, thz: '3',        intensidade: 'Fraca com velocidades médias e brilhantes'},
    { nome: 'Alfa Aurigídeos',	            inicio: '25/08', fim: '28/09', pico: 'Set 1',   ascencao: 91,   declinacao:	39,  velocidade:	66, thz: '6',        intensidade: 'Média com meteoros muito rápidos e persistentes'},
    { nome: 'Perseidas de Setembro',        inicio: '05/09', fim: '10/10', pico: 'Set 8',   ascencao: 48,   declinacao:	40,  velocidade:	64, thz: '5',        intensidade: 'Média com meteoros rápidos e persistentes'},
    { nome: 'Táuridas do Sul',              inicio: '10/09', fim: '20/11', pico: 'Out 10',  ascencao: 32,   declinacao:	9,   velocidade:	27, thz: '5',        intensidade: 'Fraca'},
    { nome: 'Delta Aurigídeos',             inicio: '22/09', fim: '23/10', pico: 'Out 10',  ascencao: 84,   declinacao:	44,  velocidade:	64, thz: '2',        intensidade: 'Fraca'},
    { nome: 'Oriónidas',                    inicio: '02/10', fim: '07/11', pico: 'Out 21',  ascencao: 95,   declinacao:	16,  velocidade:	66, thz: '25',       intensidade: 'Forte com meteoros rápidos e persistentes'},
    { nome: 'Dracónidas',                   inicio: '06/10', fim: '10/10', pico: 'Out 8',   ascencao: 262,  declinacao:	54,  velocidade:	20, thz: 'Variável', intensidade: 'Irregular'},
    { nome: 'Épsilon Geminídeos',           inicio: '14/10', fim: '27/10', pico: 'Out 18',  ascencao: 102,  declinacao:	27,  velocidade:	70, thz: '3',        intensidade: 'Fraca'},
    { nome: 'Leo Minorídeos',               inicio: '21/10', fim: '23/10', pico: 'Out 22',  ascencao: 162,  declinacao:	37,  velocidade:	62, thz: '2',        intensidade: 'Fraca'},
    { nome: 'Táuridas do Norte',            inicio: '01/11', fim: '25/11', pico: 'Nov 12',  ascencao: 58,   declinacao:	22,  velocidade:	29, thz: '5',        intensidade: 'Média com meteoros muito lentos mas brilhantes'},
    { nome: 'Leónidas',                     inicio: '14/11', fim: '21/11', pico: 'Nov 17',  ascencao: 152,  declinacao:	22,  velocidade:	71, thz: 'Variável', intensidade: 'Irregular com meteoros muito rápidos, atingindo um pico de 33 em 33 anos'},
    { nome: 'Alfa Monocerotídeos',          inicio: '15/11', fim: '25/11', pico: 'Nov 21',  ascencao: 117,  declinacao:	1,  velocidade:	65, thz: 'Variável', intensidade: 'Irregular'},
    { nome: 'Monocerotídeos',               inicio: '27/11', fim: '17/12', pico: 'Dez 8',   ascencao: 100,  declinacao:	8,  velocidade:	42, thz: '2',        intensidade: 'Fraca'},
    { nome: 'Fenícidas',	                inicio: '28/11', fim: '09/12', pico: 'Dez 6',   ascencao: 18,   declinacao:	-53,  velocidade:	18, thz: 'Variável', intensidade: 'Irregular'},
    { nome: 'Quadrântidas',	                inicio: '28/11', fim: '12/01', pico: 'Jan 4',   ascencao: 230,  declinacao:	49,  velocidade:	41, thz: '120',      intensidade: 'Forte com velocidades médias'},
    { nome: 'Pupidas-Velidas',	            inicio: '02/12', fim: '16/12', pico: 'Dez 12',  ascencao: 123,  declinacao:	-45,  velocidade:	40, thz: '10',       intensidade: 'Média'},
    { nome: 'Sigma Hidrídeos',              inicio: '03/12', fim: '15/12', pico: 'Dez 12',  ascencao: 127,  declinacao:	2,  velocidade:	58, thz: '3',        intensidade: 'Fraca'},
    { nome: 'Leo Minorídeos de Dezembro',   inicio: '05/12', fim: '04/02', pico: 'Dez 19',  ascencao: 161,  declinacao:	30,  velocidade:	64, thz: '5',        intensidade: 'Média'},
    { nome: 'Gemínidas',	                inicio: '07/12', fim: '17/12', pico: 'Dez 14',  ascencao: 112,  declinacao:	33,  velocidade:	35, thz: '120',      intensidade: 'Forte com velocidades médias, meteoros brancos e numerosos'},
    { nome: 'Coma Berenicídeos',            inicio: '12/12', fim: '23/01', pico: 'Dez 20',  ascencao: 175,  declinacao:	18,  velocidade:	65, thz: '3',        intensidade: 'Fraca'},
    { nome: 'Úrsidas',                      inicio: '17/12', fim: '26/12', pico: 'Dez 22',  ascencao: 217,  declinacao:	76,  velocidade:	33, thz: '10',       intensidade: 'Média'},
];

export default colecaoChuvasDeMeteoros;