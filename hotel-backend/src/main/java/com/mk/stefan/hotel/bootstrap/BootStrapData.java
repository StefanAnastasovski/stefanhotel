package com.mk.stefan.hotel.bootstrap;

import com.mk.stefan.hotel.model.*;
import com.mk.stefan.hotel.repositories.*;
import org.springframework.boot.CommandLineRunner;
import org.springframework.stereotype.Component;

@Component
public class BootStrapData implements CommandLineRunner {

    private final AccountRepository accountRepository;
    private final SignUpRepository signUpRepository;
    private final LoginRepository loginRepository;
    private final RoomRepository roomRepository;
    private final TableRepository tableRepository;
    private final RoomReservationRepository roomReservationRepository;
    private final TableReservationRepository tableReservationRepository;
    private final OrderRepository orderRepository;
    private final ServiceRepository serviceRepository;
    private final MenuRepository menuRepository;
    private final BillRepository billRepository;
    private final PaymentRepository paymentRepository;
    private final ContactUsRepository contactUsRepository;
    private final OfferRepository offerRepository;

    public BootStrapData(AccountRepository accountRepository, SignUpRepository signUpRepository,
                         LoginRepository loginRepository, RoomRepository roomRepository,
                         TableRepository tableRepository,
                         RoomReservationRepository roomReservationRepository,
                         TableReservationRepository tableReservationRepository,
                         OrderRepository orderRepository, ServiceRepository serviceRepository,
                         MenuRepository menuRepository, BillRepository billRepository,
                         PaymentRepository paymentRepository, ContactUsRepository contactUsRepository,
                         OfferRepository offerRepository) {

        this.accountRepository = accountRepository;
        this.signUpRepository = signUpRepository;
        this.loginRepository = loginRepository;
        this.roomRepository = roomRepository;
        this.tableRepository = tableRepository;
        this.roomReservationRepository = roomReservationRepository;
        this.tableReservationRepository = tableReservationRepository;
        this.orderRepository = orderRepository;
        this.serviceRepository = serviceRepository;
        this.menuRepository = menuRepository;
        this.billRepository = billRepository;
        this.paymentRepository = paymentRepository;
        this.contactUsRepository = contactUsRepository;
        this.offerRepository = offerRepository;
    }

    @Override
    public void run(String... args) throws Exception {

        Account account1 = new Account("stevo");



        //--------------------------------------------------

        SignUp signup1 = new SignUp("Stefan", "Anastasovski", "Stevo",
                "1234", "stefan@gmail.com", "male", "10-02-1996", "today");
        account1.setSignUp(signup1);
        accountRepository.save(account1);

        signUpRepository.save(signup1);

        //--------------------------------------------------


        Login login1 = new Login("stevo", "today");

        loginRepository.save(login1);

        //--------------------------------------------------


        Payment payment1 = new Payment("Stefan Anastasovski", "123456", "203",
                "10", "20");

        paymentRepository.save(payment1);

        //--------------------------------------------------


        ContactUs contactUs1 = new ContactUs("Stefan", "Anastasovski",
                "tralala@gmail.com", "test comment");

        contactUsRepository.save(contactUs1);

        //--------------------------------------------------


        Bill bill1 = new Bill("2323232", "05-03-2020", "2345");

        billRepository.save(bill1);

        //--------------------------------------------------


        Menu menu1 = new Menu("dinner", "eggs and bacon", "15");
        Menu menu2 = new Menu("dinner", "egg", "12");
        Menu menu3 = new Menu("breakfast", "bacon", "12");
        Menu menu4 = new Menu("lunch", "chicken", "12");
        Menu menu5 = new Menu("dinner", "rice", "12");

        menuRepository.save(menu1);
        menuRepository.save(menu2);
        menuRepository.save(menu3);
        menuRepository.save(menu4);
        menuRepository.save(menu5);

        //--------------------------------------------------


        Offer offer1 = new Offer("super offer", "super offer super offer", "234");
        Offer offer2 = new Offer("2+1 nights", "1 gratis night in our hotel", "44");

        offerRepository.save(offer1);
        offerRepository.save(offer2);

        //--------------------------------------------------


        Order order1 = new Order("Stefan", "Anastasovski",
                "12", "23423423", "05-03-2020", "15h", "plus request");

        orderRepository.save(order1);

        //--------------------------------------------------

        Room room1 = new Room("1", "2", 23L);
        Room room2 = new Room("2", "3", 35L);
        Room room3 = new Room("3", "4", 45L);

        roomRepository.save(room1);
        roomRepository.save(room2);
        roomRepository.save(room3);

        //--------------------------------------------------

        RoomReservation roomReservation1 = new RoomReservation("Stefan", "Anastasovski",
                "077234321", "tralla@gmail.com", "3", "2",
                "05-03-2020", "07-03-2020", "plus bed", "1234");

        roomReservationRepository.save(roomReservation1);

        //--------------------------------------------------

        Service service1 = new Service("Bath Towels", "12");
        Service service2 = new Service("Hand Towels", "14");
        Service service3 = new Service("Wash Cloths", "13");
        Service service4 = new Service("Bath Mats", "15");
        Service service5 = new Service("Flat Sheets", "11");
        Service service6 = new Service("Fitted Sheets", "6");
        Service service7 = new Service("Pillowcases", "7");
        Service service8 = new Service("Room Cleaning", "20");

        serviceRepository.save(service1);
        serviceRepository.save(service2);
        serviceRepository.save(service3);
        serviceRepository.save(service4);
        serviceRepository.save(service5);
        serviceRepository.save(service6);
        serviceRepository.save(service7);
        serviceRepository.save(service8);

        //--------------------------------------------------

        Table table1 = new Table("32","6" );

        tableRepository.save(table1);

        //--------------------------------------------------

        TableReservation tableReservation1 = new TableReservation("Stefan", "Anastasovski",
                "077433432", "tralala@gmail.com", "2",
                "05-03-2020", "17:30",
                "bucket roses", "" );

        tableReservationRepository.save(tableReservation1);

        //--------------------------------------------------



    }
}
