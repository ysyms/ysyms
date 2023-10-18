import Principal "mo:base/Principal";
import Text "mo:base/Text";

actor {
    type ExternalCanister = actor {
        icrc1_balance_of: shared query ({ owner: Principal; subaccount: ?[Nat8] }) -> async Nat;
        icrc1_name:shared query()->async Text
    };

    public shared func icrc1_token_info() : async (Nat,Text) {
        
        let token_canister: ExternalCanister = actor "zfcdd-tqaaa-aaaaq-aaaga-cai";
        let wallet_pid = Principal.fromText("vfhdx-67tj7-akypt-6a6fx-yqzlr-3om4p-a7cem-qkozv-76oie-ghfgv-jae");

        let balance : Nat = await token_canister.icrc1_balance_of({owner= wallet_pid;subaccount= null});
        let name:Text=await token_canister.icrc1_name();
        return (balance,name);
    };
};
