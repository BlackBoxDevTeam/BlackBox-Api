import { ClientProviderOptions, Transport } from "@nestjs/microservices";

export const ClubMicroservice : ClientProviderOptions= {
    name: 'CLUBS_SERVICE',
    transport: Transport.TCP,
    options: {
      port: 8081
    }
  } 