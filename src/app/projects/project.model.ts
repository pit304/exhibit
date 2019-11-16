import { ProjectImage } from './project-image.model';

export class Project {
  constructor(
    public id: number,
    public project_title: string,
    public project_text: string,
    public main_image: ProjectImage,
    public images: ProjectImage[],
    public plans: ProjectImage[],
    public backup: boolean = false
  ) {}

  static backup: Project[] = [
    {
      id: 3,
      project_title: 'Blue Residence 2',
      project_text: '<p>location tenero, ticino, switzerland</p>\r\n\r\n<p>year 2017_competition</p>\r\n\r\n<p>client UFCL &ndash; Ufficio federale costruzioni e logistica, Berna</p>\r\n\r\n<p>program 5.631 m2 + outdoor 89.600 m2</p>\r\n\r\n<p>type national swimming sport centre</p>\r\n\r\n<p>ft team arch. riccardo amarri, arch. marco guerra, arch. antoine lebot, arch. andrea nardi, alessandro pecci, domenico singha pedroli</p>\r\n\r\n<p>stability eng. gianfranco bronzini, conzett bronzini partner ag</p>\r\n\r\n<p>services eng. luca pietro gattoni</p>\r\n\r\n<p>landscape maurus schifferli</p>\r\n\r\n<p>render julian nieciecki</p>\r\n\r\n<p>&nbsp;</p>\r\n\r\n<p><em>The site is defined by the lake, the mountains and the countryside area the sports fields. The design proposes a simple and direct settlement: a single compact building 60 x 300 m.The realization per phases is linear: one building after another.</em></p>\r\n\r\n<p>&nbsp;</p>\r\n\r\n<p>The project area together with Bolle di Magadino is the only Ticino site listed in the Ramsar International Convention protected wetlands. The project proposes a reading of the complex stratification of habitats from the lake to the mountains: reed beds, woodlands to wood springs with white willows and alders, woodlands to hardwood and then forests. The landscape project proposes natural forestry with indigenous tree species belonging to the habitat of hardwood floodplain wood. The open area of the sports fields corresponds to a countryside landscape, characteristic of Magadino orthogonal plot that the design proposes to complete with deciduous tree-lined avenues. The new access points are enlightened by majestic trees such as fagus sylvatica purpurea.</p>\r\n\r\n<p>&nbsp;</p>\r\n\r\n<p><em>The new swimming centre is like alike a stone pergola in the park.</em></p>\r\n\r\n<p>&nbsp;</p>\r\n\r\n<p>It has the character of a pavilion for lightness, diffused brightness and the plurality of views that open in every direction of the landscape: the experience of the interior space is like being outdoors in every season. Otherwise the scale of the building and the rationality of the organization of the environments and of the sports infrastructure respond to the logic of a factory or a &quot;machine&quot;.</p>\r\n\r\n<p>&nbsp;</p>\r\n\r\n<p><em>The load-bearing structure is made up of pillars and beams stacked on top of each other mostly prefabricated.</em></p>\r\n\r\n<p>&nbsp;</p>\r\n\r\n<p>The residences and the new gym share the spatial and construction principles of the swimming centre.</p>',
      main_image: {
        id: 13,
        title: "roof plan swimmingpool",
        url: "/media/images/roof_plan_swimmingpool.jpg"
      },
      images: [{
        id: 13,
        title: "roof plan swimmingpool",
        url: "/media/images/roof_plan_swimmingpool.jpg"
      }, {
        id: 14,
        title: "construction system",
        url: "/media/images/construction_system.jpg"
      }, {
        id: 15,
        title: "axonometry swiming pool",
        url: "/media/images/axonometry_swiming_pool.jpg"
      }],
      plans: [{
        id: 16,
        title: "landscape plan",
        url: "/media/images/landscape_plan.jpg"
      }, {
        id: 17,
        title: "herbarium",
        url: "/media/images/herbarium.jpg"
      }, {
        id: 18,
        title: "general plan",
        url: "/media/images/general_plan.jpg"
      }],
      backup: true
    },
    {
      id: 2,
      project_title: 'CATTIA',
      project_text: '<p>location hasselt, belgium</p>\r\n\r\n<p>year 2011-2019</p>\r\n\r\n<p>client Provincie Limburg, Z33</p>\r\n\r\n<p>program 4.664 m2 + exterior 300 m2</p>\r\n\r\n<p>type contemporary art gallery</p>\r\n\r\n<p>construction costs 8.800.000 eur incl.btw</p>\r\n\r\n<p>ft team tom&agrave;s cabral, arch. előd zolt&agrave;n golicza, lorenzo gatta, arch. marco guerra, cyril kamber, arch. antoine lebot, jovan minic, arch. andrea nardi, arch. anna oliva, nicola torniamenti, gion balthasar von albertini</p>\r\n\r\n<p>stability ad. conzett bronzini partner ag</p>\r\n\r\n<p>services ad. eng. luca pietro gattoni</p>\r\n\r\n<p>executive isabelle goossens, ABT belgie nv</p>\r\n\r\n<p>exhibitions 2013, atelier &agrave; habiter, z33, hasselt</p>\r\n\r\n<p>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; 2016, z33 bouwt !, z33, hasselt</p>\r\n\r\n<p>photo gion balthasar von albertini</p>\r\n\r\n<p>&nbsp;</p>\r\n\r\n<p><em>Z33 belongs to the Beguinage of Hasselt, a monument and a part of the city.</em></p>\r\n\r\n<p>&nbsp;</p>\r\n\r\n<p>The historical complex resembles an island in the urban tissue, due to&nbsp;the exceptional size of the void and for the permanency of its border&nbsp;through history, an incongruous but continuous system of brick constructions.</p>\r\n\r\n<p>Z33 is part of this wall of buildings around the park. The park is the centre.</p>\r\n\r\n<p>&nbsp;</p>\r\n\r\n<p><em>The design aims to promote it as place of rest, with a different sound from the bustling&nbsp;of the city centre.</em></p>\r\n\r\n<p>&nbsp;</p>\r\n\r\n<p>The protection is given by the layering of the built border&nbsp;with its varying degrees of privacy: the park, the Begjinhof gardens, walls and gates, the plants and the herbs, the almost blind wall of the Jenever Museum and its silent chimneys, the modern severity of Vleugel&rsquo;58, the solid opening of the Poortgebouw.</p>\r\n\r\n<p>&nbsp;</p>\r\n\r\n<p><em>The house for contemporary art is one building made of two: the exisiting Vleugel &rsquo;58 and the extension building.</em></p>\r\n\r\n<p>&nbsp;</p>\r\n\r\n<p>Vleugel&rsquo;58 will remain a sequence of &ldquo;chambres d&rsquo;exposition&rdquo;, a classical infrastructure of room with fine proportions and a certain degree of anonymity. The extension building is an ensemble of simple rooms that vary in size, proportion and light atmosphere and that overlook each other through the others: the complexity of the spatial pattern echoes the multiplicity of experiences of a city, with gradients between public and private, exposed or intimate.</p>\r\n\r\n<p>&nbsp;</p>\r\n\r\n<p><em>The facade&nbsp;is the most delicate part of the project: it is the expression of the &ldquo;house&rdquo; towards the street.</em></p>\r\n\r\n<p>&nbsp;</p>\r\n\r\n<p>The&nbsp;facade is bound to the brick architecture of the context: a continuous traditional solid masonry with variations in colour and size of both bricks and joints. It is an innovative construction of a double solid wall: an interior warm structure coupled with an exterior cold structure, which has movement in relation to temperature variations.</p>\r\n\r\n<p>The design sets the goal of the construction of a solid fa&ccedil;ade in line with the traditional masonry, developing a solution, which is congruent and feasible with the technical knowledge and production possibilities of the present day.</p>\r\n\r\n<p>This can be achieved by building the exterior wall of the fa&ccedil;ade as a solid composite reinforced brick-mortar wall, reducing to a mimimum the quantity of dilatation joints.</p>\r\n\r\n<p>&nbsp;</p>\r\n\r\n<p><em>Walking along the street people experience the quietness of a long solid brick wall and a few openings from which one is overlooked by leaves and branches.</em></p>',
      main_image: {
        id: 7,
        title: "the entrance",
        url: "/media/images/the_entrance.jpg"
      },
      images: [{
        id: 7,
        title: "the entrance",
        url: "/media/images/the_entrance.jpg"
      }, {
        id: 8,
        title: "the entrance patio",
        url: "/media/images/the_entrance_patio.jpg"
      }, {
        id: 9,
        title: "the entrance vestibule",
        url: "/media/images/the_entrance_vestibule.jpg"
      }],
      plans: [{
        id: 10,
        title: "sketch of rooms",
        url: "/media/images/sketch_of_rooms.jpg"
      }, {
        id: 11,
        title: "the situation",
        url: "/media/images/the_situation.jpg"
      }, {
        id: 12,
        title: "plan level +0",
        url: "/media/images/plan_level_0.jpg"
      }],
      backup: true
    },
    {
      id: 1,
      project_title: 'Sitei',
      project_text: '<p>location sorano, italy</p>\r\n\r\n<p>year 2006-2010</p>\r\n\r\n<p>client private</p>\r\n\r\n<p>program 75 m2 + garden 300 m2</p>\r\n\r\n<p>type holiday house</p>\r\n\r\n<p>construction costs 350.000 eur</p>\r\n\r\n<p>stability eng. stefano debiasi, padova</p>\r\n\r\n<p>contractor maurizio crociani, domenico de feo</p>\r\n\r\n<p>consolidation so.ge.tec srl, villa d&rsquo;adda, bergamo</p>\r\n\r\n<p>waterproofing technicolor sas, grosseto</p>\r\n\r\n<p>stone prod. marmi galli srl, verona</p>\r\n\r\n<p>carpentry de rossi snc, mestre, fratelli lodoli, maerne di martellago, venezia</p>\r\n\r\n<p>windows fabbri canton snc, vigonza</p>\r\n\r\n<p>wood ceiling holzbau gmbh, bolzano</p>\r\n\r\n<p>furniture oberrauch gmbh, bolzano</p>\r\n\r\n<p>photo előd zolt&agrave;n golicza, ftv</p>\r\n\r\n<p>&nbsp;</p>\r\n\r\n<p><em>Sorano is a medieval village, not far from Lake Bolsena.</em></p>\r\n\r\n<p>&nbsp;</p>\r\n\r\n<p>It is perched on a tuff hill, surrounded by the river Lente and land wooded with chestnut trees, olive trees and brooms.<br />\r\nThe hill is a dense maze of houses, caves, wineries and galleries; the same hill was used as a quarry for the extraction of stone building blocks.</p>\r\n\r\n<p>&nbsp;</p>\r\n\r\n<p><em>From a distance, the building integrates gracefully amongst the tufa walls and the tiles of existing roofs.</em></p>\r\n\r\n<p>&nbsp;</p>\r\n\r\n<p>The small holiday house consists of six rooms: two of them are formed from the existing caves. The rooms complete the space between the tufa rock and the escarpment along the line of the historic city walls.<br />\r\nAn enfilade of small rooms stretches from the entrance to the dining room through the vestibule and the small study and ends in the bathroom: the main bedroom, placed in the cave, and the guest room, situated at a lower level and overlooking the garden, are more intimate and independent spaces.</p>\r\n\r\n<p>&nbsp;</p>\r\n\r\n<p><em>The interior space seems like a balcony overlooking the steep slope.</em></p>\r\n\r\n<p>&nbsp;</p>\r\n\r\n<p>The house is the crowning of the historic walls that reveal a refined and noble cut stone masonry.<br />\r\nThe project&#39;s ambition is to propose an experimental technique that offers the possibility of creating a facade that has the same expression as the ancient stone walls of Viterbo, yet&nbsp;with a thickness of only 25 cm.<br />\r\nThe construction is of an experimental dry stone setup, not showy: it is an assembly of modular elements made out of traditional materials.<br />\r\nEach room consists of a self-supporting trapezoidal dry building block configuration, which comprises of a double-face; one side with aligned joints, one with staggered joints. A steel pillar, with a kit of minutia metal and cables, is positioned to every corner of the room to compress the mass of stone. The coffered ceiling steel ensures the required load to stabilize the structure.</p>\r\n\r\n<p>&nbsp;</p>\r\n\r\n<p><em>All the construction is not hidden: it remains visible.</em></p>\r\n\r\n<p>&nbsp;</p>\r\n\r\n<p>The tuff masonry has been internally treated with a transparent waterproofing and finished with a brush application of white lime mortar. The insulation is not necessary thanks to the tuff thermal properties and to the favourable exposure of the building.<br />\r\nThe electrical system and heating system were designed as a visible technical infrastructure: around the perimeter of each room runs a border that welcomes electrical outlets, switches, pipes and radiators. Edged by this contour, the floor is a cotto tile carpet.<br />\r\nThe roof is a single slope.</p>\r\n\r\n<p>&nbsp;</p>\r\n\r\n<p><em>Outside, the house is rather traditional: inside it is more abstract.</em></p>',
      main_image: {
        id: 1,
        title: "view of sorano",
        url: "/media/images/view_of_sorano.jpg"
      },
      images: [{
        id: 1,
        title: "view of sorano",
        url: "/media/images/view_of_sorano.jpg"
      }, {
        id: 2,
        title: "walls of viterbo",
        url: "/media/images/walls_of_viterbo.jpg"
      }, {
        id: 3,
        title: "the construction",
        url: "/media/images/the_construction.jpg"
      }],
      plans: [{
        id: 4,
        title: "sorano, the house",
        url: "/media/images/sorano_the_house.jpeg"
      }, {
        id: 5,
        title: "sorano, the house, the escarpment",
        url: "/media/images/sorano_the_house_the_escarpment.jpeg"
      }, {
        id: 6,
        title: "outer elevation, inner elevation",
        url: "/media/images/outer_elevation_inner_elevation.jpg"
      }],
      backup: true
    }
  ];
}
