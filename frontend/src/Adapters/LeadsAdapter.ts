import { AcceptedLeadDTO } from "../Apis/GetAcceptedLeadsService";
import { PeddingLeadDTO } from "../Apis/GetPeddingLeadsService";

export interface AcceptedLeadCardProps {
  ID: string;
  Category: string;
  ContactFullName: string;
  DateCreated: Date;
  Description: string;
  Suburb: string;
  Price: number;
  ContactPhoneNumber: string;
  ContactEmail: string;
}

export interface PeddingLeadCardProps {
  ID: string;
  ContactFirstName: string;
  Suburb: string;
  Category: string;
  DateCreated: Date;
  Description: string;
  Price: number;
}

export class LeadsAdapter {
  public static toAcceptedLeadCard(dto: AcceptedLeadDTO): AcceptedLeadCardProps {
    return {
      ID: dto.id,
      Category: dto.category,
      ContactFullName: dto.contactFullName,
      DateCreated: new Date(dto.dateCreated),
      Description: dto.description,
      Suburb: dto.suburb,
      Price: dto.price,
      ContactPhoneNumber: dto.contactPhoneNumber,
      ContactEmail: dto.contactEmail
    };
  }

  public static toPeddingLeadCard(dto: PeddingLeadDTO): PeddingLeadCardProps {
    return {
      ID: dto.id,
      ContactFirstName: dto.contactFirstName,
      Suburb: dto.suburb,
      Category: dto.category,
      DateCreated: new Date(dto.dateCreated),
      Description: dto.description,
      Price: dto.price
    };
  }
}
