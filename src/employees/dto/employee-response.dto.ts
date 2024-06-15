export class EmployeeResponseDto {
  id: number;
  name: string;
  positionId: number;
  positionName: string;
  parentId: string;
  children: EmployeeResponseDto[];
}
