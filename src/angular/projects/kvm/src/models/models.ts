export interface AmtFeaturesResponse {
  userConsent: string
  redirection: boolean
  KVM: boolean
  SOL: boolean
  IDER: boolean
}

export interface AuditLog {
  AuditApp: string
  AuditAppID: number
  Event: string
  EventID: number
  Ex: string
  ExStr: string
  Initiator: string
  InitiatorType: number
  MCLocationType: number
  NetAddress: string
  Time: string
}

export interface AuditLogResponse {
  totalCnt: number
  records: AuditLog[]
}

export interface PowerState {
  powerstate: number
}

export interface Device {
  hostname: string
  icon: number
  connectionStatus: boolean
  guid: string
  tags: string[]
}

export interface DeviceStats {
  totalCount: number
  connectedCount: number
  disconnectedCount: number
}

export interface HardwareResponse<T> {
  response: T
  responses: any
  status: number
}

export interface CIMChassis {
  ChassisPackageType: number
  CreationClassName: string
  ElementName: string
  Manufacturer: string
  Model: string
  OperationalStatus: number
  PackageType: number
  SerialNumber: string
  Tag: string
  Version: string
}

export interface CIMChip {
  CanBeFRUed: boolean
  CreationClassName: string
  ElementName: string
  Manufacturer: string
  OperationalStatus: number
  Tag: any
  Version: string
  BankLabel: string
  Capacity?: number
  ConfiguredMemoryClockSpeed?: number
  FormFactor?: number
  IsSpeedInMhz?: boolean
  MaxMemorySpeed?: number
  MemoryType?: number
  PartNumber: string
  SerialNumber: string
  Speed?: number
}

export interface CIMCard {
  CanBeFRUed: boolean
  CreationClassName: string
  ElementName: string
  Manufacturer: string
  Model: string
  OperationalStatus: number
  PackageType: number
  SerialNumber: string
  Tag: string
  Version: string
}

export interface CIMBIOSElement {
  ElementName: string
  Manufacturer: string
  Name: string
  OperationalStatus: number
  PrimaryBIOS: boolean
  ReleaseDate: any
  SoftwareElementID: string
  SoftwareElementState: number
  TargetOperatingSystem: number
  Version: string
}

export interface CIMProcessor {
  CPUStatus: number
  CreationClassName: string
  CurrentClockSpeed: number
  DeviceID: string
  ElementName: string
  EnabledState: number
  ExternalBusClockSpeed: number
  Family: number
  HealthState: number
  MaxClockSpeed: number
  OperationalStatus: number
  RequestedState: number
  Role: string
  Stepping: number
  SystemCreationClassName: string
  SystemName: string
  UpgradeMethod: number
}

export interface CIMPhysicalMemory {
  BankLabel: string
  Capacity: any
  ConfiguredMemoryClockSpeed: number
  CreationClassName: string
  ElementName: string
  FormFactor: number
  IsSpeedInMhz: boolean
  Manufacturer: string
  MaxMemorySpeed: number
  MemoryType: number
  PartNumber: string
  SerialNumber: string
  Speed: number
  Tag: any
}

export interface CIMMediaAccessDevice {
  Capabilities: number[]
  CreationClassName: string
  DeviceID: string
  ElementName: string
  EnabledDefault: number
  EnabledState: number
  MaxMediaSize: number
  OperationalStatus: number
  RequestedState: number
  Security: number
  SystemCreationClassName: string
  SystemName: string
}

export interface CIMPhysicalPackage {
  CanBeFRUed: boolean
  CreationClassName: string
  ElementName: string
  Manufacturer: string
  Model: string
  OperationalStatus: number
  PackageType: number
  SerialNumber: string
  Tag: string
  Version: string
  ManufactureDate: any
  ChassisPackageType?: number
}

export interface HardwareInformation {
  CIM_Chassis: HardwareResponse<CIMChassis>
  CIM_Chip: HardwareResponse<CIMChip>
  CIM_Card: HardwareResponse<CIMCard>
  CIM_BIOSElement: HardwareResponse<CIMBIOSElement>
  CIM_Processor: HardwareResponse<CIMProcessor>
  CIM_PhysicalMemory: HardwareResponse<CIMPhysicalMemory>
  CIM_MediaAccessDevice: HardwareResponse<CIMMediaAccessDevice[]>
  CIM_PhysicalPackage: HardwareResponse<CIMPhysicalPackage[]>
}
